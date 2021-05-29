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

    createHiddenContextMenu(id, contexts) {
        chrome.contextMenus.create({
            id,
            title: id,
            contexts,
            visible: false
        });
    }

    showContextMenu(id, title) {
        chrome.contextMenus.update(id, {
            title,
            visible: true
        });

        this.hideContextMenuWithDelay(id);
    }

    hideContextMenu(id) {
        chrome.contextMenus.update(id, {
            visible: false
        });
    }

    hideContextMenuWithDelay(id) {
        // We have no control over the opening of the context menu in browser.
        // There are some system pages that did not include content.js and 
        // we have to hide menu item manually, otherwise users will see 
        // menu item with incorrect configuration.

        const delay = 500;
        setTimeout(() => this.hideContextMenu(id), delay);
    }
}
