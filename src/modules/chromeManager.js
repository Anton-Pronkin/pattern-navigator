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

    createGlobalContextMenuItem(id, title) {
        chrome.contextMenus.create({
            id,
            title,
            contexts: ["all"]
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
}
