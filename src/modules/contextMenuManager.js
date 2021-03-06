import ContextMenuItemType from "./enums/contextMenuItemType";
import MessageType from "./enums/messageType";

export default class ContextMenuManager {
    constructor(props) {
        this.contextMenu = props.contextMenu;
        this.patternManager = props.patternManager;
        this.chromeManager = props.chromeManager;
    }

    async listen() {
        await this.chromeManager.addMessageListener(MessageType.contextMenu, this.prepareContextMenu.bind(this));
        await this.chromeManager.addContextMenuListener(this.contextMenuItemClick.bind(this));
    }

    async prepareContextMenu({ selection, content }) {
        await this.contextMenu.removeItems();

        const targetText = selection.length ? selection : content;
        const matches = await this.patternManager.findMatches(targetText);

        await this.prepareContextMenuItems(matches);
        this.removeItemsWithDelay();
    }

    async prepareContextMenuItems(matches) {
        if (matches.length == 0) {
            return;
        }

        if (matches.length == 1) {
            return await this.prepareSingleMenuItem(matches[0]);
        }

        return await this.prepareSeveralMenuItems(matches);
    }

    async prepareSingleMenuItem(match, parentId) {
        await this.contextMenu.createItem({
            title: match.title,
            type: ContextMenuItemType.regularLink,
            url: match.url,
            parentId
        });
    }

    async prepareSeveralMenuItems(matches) {
        const folderId = await this.contextMenu.createItem({
            title: "Patterns to navigate",
            type: ContextMenuItemType.folder,
        });

        for (const match of matches) {
            await this.prepareSingleMenuItem(match, folderId);
        }

        await this.contextMenu.createSeparator(folderId);
        await this.contextMenu.createItem({
            title: "Open all in new tabs",
            type: ContextMenuItemType.openAllLinks,
            parentId: folderId
        });
    }

    removeItemsWithDelay() {
        // We have no control over the opening of the context menu in browser.
        // There are some pages that did not include content.js or that do not call the event handler.
        // We have to hide created menu items manually, otherwise, users will see them on such pages.

        const delay = 1000;
        setTimeout(async () => await this.contextMenu.hideItems(), delay);
    }

    async contextMenuItemClick({ menuItemId }) {
        const menuItem = this.contextMenu.getItem(+menuItemId);
        await this.processContextMenuItem(menuItem);

        await this.contextMenu.removeItems();
    }

    async processContextMenuItem(menuItem) {
        switch (menuItem.type) {
            case ContextMenuItemType.regularLink:
                return await this.processRegularContextMenuItem(menuItem);

            case ContextMenuItemType.openAllLinks:
                return await this.processopenAllLinksContextMenuItem();
        }
    }

    async processRegularContextMenuItem(menuItem) {
        await this.chromeManager.createTab(menuItem.url);
    }

    async processopenAllLinksContextMenuItem() {
        const menuItems = this.contextMenu.getItems(item => item.type === ContextMenuItemType.regularLink);
        for (const menuItem of menuItems) {
            await this.processRegularContextMenuItem(menuItem);
        }
    }
}
