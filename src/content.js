import MessageTypes from "./modules/messageTypes";

document.addEventListener("mousedown", event => {
    if (event.button === 2) {
        processRightClick(event); 
    }
});

document.addEventListener("contextmenu", () => {
    processContextMenu();
});

function processRightClick(event) {
    chrome.runtime.sendMessage({
        type: MessageTypes.contextMenuPreparing,
        data: {
            selection: document.getSelection().toString(),
            content: event.target.innerText || event.target.value
        }
    });
}

function processContextMenu() {
    chrome.runtime.sendMessage({
        type: MessageTypes.contextMenuOpened,
    });
}

