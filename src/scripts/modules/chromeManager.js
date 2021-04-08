export default class ChromeManager {
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

    createTab(url) {
        chrome.tabs.create({ url });
    }
}
