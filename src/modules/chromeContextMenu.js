export default class ChromeContextMenu {
    constructor() {
        this.url = null;
        this.contextMenuId = "contextMenuId";
        this.initialize();
    }

    initialize() {
        chrome.contextMenus.create({
            id: this.contextMenuId,
            title: this.contextMenuId,
            contexts: ["all"],
            visible: false
        });
    }

    getUrl() {
        return this.url;
    }

    show({ title, url }) {
        this.url = url;
        chrome.contextMenus.update(this.contextMenuId, {
            title: title,
            visible: true
        });

        this.hideWithDelay();
    }

    hide() {
        chrome.contextMenus.update(this.contextMenuId, {
            visible: false
        });
    }

    hideWithDelay() {
        // We have no control over the opening of the context menu in browser.
        // There are some system pages that did not include content.js and 
        // we have to hide menu item manually, otherwise users will see 
        // menu item with incorrect configuration.
        
        const delay = 500; 
        setTimeout(() => this.hide(), delay);
    }
}
