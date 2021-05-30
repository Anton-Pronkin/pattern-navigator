export default class ContextMenu {
    constructor(chromeManager) {
        this.chromeManager = chromeManager;
        this.items = [];
    }

    getUrl(id) {
        return this.items[id].url;
    }

    createItem(title, url) {
        const contextMenuItemId = this.items.length.toString();

        this.items.push({ url });
        this.chromeManager.createGlobalContextMenuItem(contextMenuItemId, title);
    }

    removeItems() {
        this.items = [];
        this.chromeManager.removeContextMenuItems();
    }

    hideItems() {
        for (let id = 0; id < this.items.length; id++) {
            this.chromeManager.hideContextMenuItem(id.toString());
        }
    }
}
