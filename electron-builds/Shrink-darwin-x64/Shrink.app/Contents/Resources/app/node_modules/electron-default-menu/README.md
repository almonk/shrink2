# electron-default-menu

A simple module that returns a default Electron menu template, similar to the one you'll get if you don't use `Menu.setApplicationMenu()` at all.  You can modify the returned template before creating the application menu.

Based on the sample code supplied in the [Electron menu documentation](https://github.com/atom/electron/blob/master/docs/api/menu.md)

Like the sample code, it checks the environment, and returns appropriate additional menus for Mac OS X, and sets the `role` for each menu accordingly.

Must be used from the Electron environment.

Example usage:

```javascript
import electron from 'electron';
const defaultMenu = require('electron-default-menu');
const { Menu, app, shell } = electron;
const dialog = require('dialog');

app.on('ready', () => {

  // Get template for default menu
  const menu = defaultMenu(app, shell);

  // Add custom menu
  menu.splice(4, 0, {
    label: 'Custom',
    submenu: [
      {
        label: 'Do something',
        click: (item, focusedWindow) => {
          dialog.showMessageBox({message: 'Do something', buttons: ['OK'] })
        }
      }
    ]
  })

  // Set top-level application menu, using modified template
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
})

```
