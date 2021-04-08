import MessageTypes from "./messageTypes";

export default class ContextMenuManager {
    constructor(props) {
        this.contextMenu = props.contextMenu;
        this.patternManager = props.patternManager;
        this.chromeManager = props.chromeManager;
    }

    listen() {
        this.chromeManager.addMessageListener(MessageTypes.contextMenu, this.processContextMenu.bind(this));
        this.chromeManager.addContextMenuListener(this.processContextMenuItem.bind(this));
    }

    processContextMenu({ selection, content }) {
        const targetText = selection.length ? selection : content;

        const match = this.patternManager.findFirstMatch(targetText);
        if (match) {
            this.contextMenu.show({
                title: match.title,
                url: match.url
            });
        }
        else {
            this.contextMenu.hide();
        }
    }

    processContextMenuItem() {
        this.contextMenu.hide();

        const url = this.contextMenu.getUrl();
        this.chromeManager.createTab(url);
    }
}
