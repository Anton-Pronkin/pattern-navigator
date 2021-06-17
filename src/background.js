import ChromeContextMenu from "./modules/contextMenu";
import PatternManager from "./modules/patternManager";
import ContextMenuManager from "./modules/contextMenuManager";
import ChromeManager from "./modules/chrome/chromeManager";
import ChromeStorage from "./modules/chrome/chromeStorage";
import PatternStorage from "./modules/patternStorage";

const chromeManager = new ChromeManager();
const contextMenu = new ChromeContextMenu(chromeManager);

const chromeStorage = new ChromeStorage();
const patternStorage = new PatternStorage(chromeStorage);
const patternManager = new PatternManager(patternStorage);

const contextMenuManager = new ContextMenuManager({ contextMenu, patternManager, chromeManager });
contextMenuManager.listen();
