export default class ChromeManager {
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

    createContextMenuItem(id, title, type) {
        chrome.contextMenus.create({
            id,
            title,
            contexts: [chrome.contextMenus.ContextType.ALL],
            type: type || chrome.contextMenus.ItemType.NORMAL
        });
    }

    createContextMenuSeparator() {
        this.createContextMenuItem(null, null, chrome.contextMenus.ItemType.SEPARATOR);
    }

    hideContextMenuItem(id) {
        chrome.contextMenus.update(id, {
            visible: false
        });
    }

    removeContextMenuItems() {
        chrome.contextMenus.removeAll();
    }
}
