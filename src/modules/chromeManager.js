export default class ChromeManager {
    constructor() {
        this.contextMenuOptions = {
            contexts: [chrome.contextMenus.ContextType.ALL],
            documentUrlPatterns: ["http://*/*", "https://*/*"]
        };
    }

    createTab(url) {
        chrome.tabs.create({ url });
    }

    addMessageListener(type, handler) {
        chrome.extension.onMessage.addListener((message, sender, sendResponse) => {
            if (message && message.type && message.type === type) {
                handler(message.data, sender, sendResponse);
            }
        });
    }

    addContextMenuListener(handler) {
        chrome.contextMenus.onClicked.addListener((data, tab) => {
            handler(data, tab);
        });
    }

    createContextMenuItem({ id, title, type, parentId }) {
        chrome.contextMenus.create({
            id: id,
            title: title || "",
            contexts: this.contextMenuOptions.contexts,
            parentId: parentId || null,
            type: type || chrome.contextMenus.ItemType.NORMAL,
            documentUrlPatterns: this.contextMenuOptions.documentUrlPatterns,
        });
    }

    createContextMenuSeparator({ parentId }) {
        this.createContextMenuItem({
            type: chrome.contextMenus.ItemType.SEPARATOR,
            parentId
        });
    }

    hideContextMenuItem(id) {
        chrome.contextMenus.update(id, {
            visible: false
        });
    }

    removeContextMenuItems() {
        chrome.contextMenus.removeAll();
    }

    saveAs(url, filename) {
        chrome.downloads.download({
            url,
            filename,
            saveAs: true
        });
    }
}
