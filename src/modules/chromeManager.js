export default class ChromeManager {
    constructor() {
        this.contextMenuOptions = {
            contexts: [chrome.contextMenus.ContextType.ALL],
            documentUrlPatterns: ["http://*/*", "https://*/*"]
        };
    }

    async createTab(url) {
        await chrome.tabs.create({ url });
    }

    async addMessageListener(type, handler) {
        await chrome.extension.onMessage.addListener((message, sender, sendResponse) => {
            if (message && message.type && message.type === type) {
                handler(message.data, sender, sendResponse);
            }
        });
    }

    async addContextMenuListener(handler) {
        await chrome.contextMenus.onClicked.addListener((data, tab) => {
            handler(data, tab);
        });
    }

    async createContextMenuItem({ id, title, type, parentId }) {
        await chrome.contextMenus.create({
            id: id,
            title: title || "",
            contexts: this.contextMenuOptions.contexts,
            parentId: parentId || null,
            type: type || chrome.contextMenus.ItemType.NORMAL,
            documentUrlPatterns: this.contextMenuOptions.documentUrlPatterns,
        });
    }

    async createContextMenuSeparator({ parentId }) {
        await this.createContextMenuItem({
            type: chrome.contextMenus.ItemType.SEPARATOR,
            parentId
        });
    }

    async hideContextMenuItem(id) {
        await chrome.contextMenus.update(id, {
            visible: false
        });
    }

    async removeContextMenuItems() {
        await chrome.contextMenus.removeAll();
    }

    async saveAs(url, filename) {
        await chrome.downloads.download({
            url,
            filename,
            saveAs: true
        });
    }
}
