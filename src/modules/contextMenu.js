export default class ContextMenu {
    constructor(chromeManager) {
        this.url = null;
        this.contextMenuId = "contextMenuId";
        this.chromeManager = chromeManager;
        this.initialize();
    }

    initialize() {
        this.chromeManager.createHiddenContextMenu(this.contextMenuId, ["all"]);
    }

    getUrl() {
        return this.url;
    }

    show({ title, url }) {
        this.url = url;
        this.chromeManager.showContextMenu(this.contextMenuId, title);
    }

    hide() {
        this.chromeManager.hideContextMenu(this.contextMenuId);
    }
}
