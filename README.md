# Pattern navigator
If you use issue trackers, agile tools, and other systems that support identification by identifiers, this tiny extension helps you to navigate to the specific item by selecting the context menu item!

## Conceptual view
### Configuration
![image](https://user-images.githubusercontent.com/54352931/123008532-b09b8e00-d3c3-11eb-8e14-328559b510cc.png)

### The only match
![image](https://user-images.githubusercontent.com/54352931/123008577-c8731200-d3c3-11eb-885e-5fef38e69eac.png) 

### Multiple matches
![image](https://user-images.githubusercontent.com/54352931/123009055-af1e9580-d3c4-11eb-84cf-a065871df28b.png)

## Main workflow
- Right-click to any element on a page or select any text on a page and right-click.

**Result**: the extension tries to match the selected text or text of the selected item with your patterns. If a pattern is matched, you will see the corresponding menu item in the context menu.
- Click on the context menu item.

**Result**: you will be navigated to the item of the system that was matched with the pattern.

## Features
- Add/Update/Delete patterns and related URLs.
- Multiple menu items if the text of element or selected text contains several identifiers.
- Import/Export configurations.

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
