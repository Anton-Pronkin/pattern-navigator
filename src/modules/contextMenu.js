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

    createItem(props) {
        const contextMenuItemId = this.items.length.toString();

        this.items.push(props);
        this.chromeManager.createContextMenuItem({
            id: contextMenuItemId,
            title: props.title,
            parentId: props.parentId
        });

        return contextMenuItemId;
    }

    createSeparator(parentId) {
        this.chromeManager.createContextMenuSeparator({ parentId });
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
