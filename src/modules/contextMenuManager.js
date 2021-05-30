import MessageTypes from "./messageTypes";

export default class ContextMenuManager {
    constructor(props) {
        this.contextMenu = props.contextMenu;
        this.patternManager = props.patternManager;
        this.chromeManager = props.chromeManager;
    }

    listen() {
        this.chromeManager.addMessageListener(MessageTypes.contextMenuPreparing, this.prepareContextMenu.bind(this));
        this.chromeManager.addMessageListener(MessageTypes.contextMenuOpened, this.hideContextMenu.bind(this));
        this.chromeManager.addContextMenuListener(this.processContextMenuItem.bind(this));
    }

    async prepareContextMenu({ selection, content }) {
        this.contextMenu.removeItems();

        const targetText = selection.length ? selection : content;
        const matches = await this.patternManager.findMatches(targetText);
        for (const match of matches) {
            this.contextMenu.createItem(match.title, match.url);
        }
    }

    processContextMenuItem({menuItemId}) {
        const url = this.contextMenu.getUrl(+menuItemId);
        this.chromeManager.createTab(url);

        this.contextMenu.removeItems();
    }

    hideContextMenu() {
        this.contextMenu.hideItems();
    }
}
