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

    async createItem(props) {
        const contextMenuItemId = this.items.length.toString();

        this.items.push(props);
        await this.chromeManager.createContextMenuItem({
            id: contextMenuItemId,
            title: props.title,
            parentId: props.parentId
        });

        return contextMenuItemId;
    }

    async createSeparator(parentId) {
        await this.chromeManager.createContextMenuSeparator({ parentId });
    }

    async removeItems() {
        this.items = [];
        await this.chromeManager.removeContextMenuItems();
    }

    async hideItems() {
        for (let id = 0; id < this.items.length; id++) {
            await this.chromeManager.hideContextMenuItem(id.toString());
        }
    }
}
