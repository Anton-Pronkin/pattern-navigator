import MessageTypes from "./modules/messageTypes";

document.addEventListener("mousedown", event => {
    if (event.button === 2) {
        processRightClick(event);
    }
});

function processRightClick(event) {
    chrome.runtime.sendMessage({
        type: MessageTypes.contextMenu,
        data: {
            selection: document.getSelection().toString(),
            content: event.target.innerText || event.target.value
        }
    });
}
