export default class ContextMenu {
    constructor(chromeManager) {
        this.chromeManager = chromeManager;
        this.items = [];
    }

    getItem(id) {
        return this.items[id];
    }

    getItems(predicate) {
        return this.items.filter(predicate);
    }

    createItem(title, data) {
        const contextMenuItemId = this.items.length.toString();

        this.items.push(data);
        this.chromeManager.createContextMenuItem(contextMenuItemId, title);
    }

    createSeparator() {
        this.chromeManager.createContextMenuSeparator();
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
