# Pattern navigator
If you use issue trackers, agile tools, and other systems that support identification by identifiers, this tiny extension helps you to navigate to the specific item by selecting the context menu item!

## Conceptual view
![image](https://user-images.githubusercontent.com/54352931/114103364-b2c87300-98d1-11eb-89c0-d85672e5328d.png)

## Main workflow
- Right-click to any element on a page or select any text on a page and right-click.

**Result**: the extension tries to match the selected text or text of the selected item with your patterns. If a pattern is matched, you will see the corresponding menu item in the context menu.
- Click on the context menu item.

**Result**: you will be navigated to the item of the system that was matched with the pattern.

## Possible features
- Add/Update/Delete identifier patterns and related URLs.
- Associate menu item text for different tools.
- Multiple menu items if the text of element or selected text contains several identifiers.
- Additional features for systems that do not support navigation to items by identifier.

## How to
### Watch files to rebuild the extension if any file has been changed
- Install dependencies `npm install`.
- Use `npm run watch` to start watching.

### Build the extension
- Install dependencies `npm install`.
- Use `npm run build` to build extension for development.
- Use `npm run prod` to build extension for production.

### Install the extension in Chrome
- Run watching or build extension.
- Go to the Extensions page (`chrome://extensions/`) and enable the developer mode on the top right.
- Click Load unpacked and choose the App folder.
