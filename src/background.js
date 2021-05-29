import ChromeContextMenu from "./modules/contextMenu";
import PatternManager from "./modules/patternManager";
import ContextMenuManager from "./modules/contextMenuManager";
import ChromeManager from "./modules/chromeManager";

const chromeManager = new ChromeManager();
const contextMenu = new ChromeContextMenu(chromeManager);
const patternManager = new PatternManager();

const contextMenuManager = new ContextMenuManager({ contextMenu, patternManager, chromeManager });
contextMenuManager.listen();
