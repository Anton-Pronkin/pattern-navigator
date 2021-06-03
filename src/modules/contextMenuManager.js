import ContextMenuItemType from "./contextMenuItemType";
import MessageTypes from "./messageTypes";

export default class ContextMenuManager {
    constructor(props) {
        this.contextMenu = props.contextMenu;
        this.patternManager = props.patternManager;
        this.chromeManager = props.chromeManager;
    }

    listen() {
        this.chromeManager.addMessageListener(MessageTypes.contextMenu, this.prepareContextMenu.bind(this));
        this.chromeManager.addContextMenuListener(this.contextMenuItemClick.bind(this));
    }

    async prepareContextMenu({ selection, content }) {
        this.contextMenu.removeItems();

        const targetText = selection.length ? selection : content;
        const matches = await this.patternManager.findMatches(targetText);

        this.prepareContextMenuItems(matches);
        this.removeItemsWithDelay();
    }

    prepareContextMenuItems(matches) {
        for (const match of matches) {
            this.contextMenu.createItem(match.title, {
                type: ContextMenuItemType.RegularLink,
                url: match.url
            });
        }

        if (matches.length > 1) {
            this.contextMenu.createSeparator();
            this.contextMenu.createItem("Open all matches in new tabs", {
                type: ContextMenuItemType.OpenAllLinks
            });
        }
    }

    removeItemsWithDelay() {
        // We have no control over the opening of the context menu in browser.
        // There are some pages that did not include content.js or that do not call the event handler.
        // We have to hide created menu items manually, otherwise, users will see them on such pages.

        const delay = 1000; 
        setTimeout(() => this.contextMenu.hideItems(), delay);
    }

    contextMenuItemClick({ menuItemId }) {
        const menuItem = this.contextMenu.getItem(+menuItemId);
        this.processContextMenuItem(menuItem);

        this.contextMenu.removeItems();
    }

    processContextMenuItem(menuItem) {
        switch (menuItem.type) {
            case ContextMenuItemType.RegularLink:
                return this.processRegularContextMenuItem(menuItem);

            case ContextMenuItemType.OpenAllLinks:
                return this.processOpenAllLinksContextMenuItem();
        }
    }

    processRegularContextMenuItem(menuItem) {
        this.chromeManager.createTab(menuItem.url);
    }

    processOpenAllLinksContextMenuItem() {
        const menuItems = this.contextMenu.getItems(item => item.type === ContextMenuItemType.RegularLink);
        for (const menuItem of menuItems) {
            this.processRegularContextMenuItem(menuItem);
        }
    }
}
