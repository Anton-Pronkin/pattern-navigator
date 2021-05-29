import ChromeContextMenu from "./modules/chromeContextMenu";
import PatternManager from "./modules/patternManager";
import ContextMenuManager from "./modules/contextMenuManager";
import ChromeManager from "./modules/chromeManager";

const contextMenu = new ChromeContextMenu();
const patternManager = new PatternManager();
const chromeManager = new ChromeManager();

const contextMenuManager = new ContextMenuManager({ contextMenu, patternManager, chromeManager });
contextMenuManager.listen();
