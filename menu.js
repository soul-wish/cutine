const electron = require('electron');

const shell = electron.shell;
const app = electron.app;
const appName = app.getName();

const issueBody = `
<!-- Please, describe your issue and steps to reproduce it. -->
-
${app.getName()} ${app.getVersion()}
Electron version: ${process.versions.electron}`;

const menuTemplate = [
    {
        label: appName,
        submenu: [
            {
                role: 'about'
            },
            {
                type: 'separator'
            },
            {
                role: 'hide'
            },
            {
                role: 'hideothers'
            },
            {
                role: 'unhide'
            },
            {
                type: 'separator'
            },
            {
                role: 'quit'
            }
        ]
    },
    {
        role: 'window',
        submenu: [
            {
                role: 'minimize'
            },
            {
                role: 'close'
            },
            {
                role: 'front'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: `${appName} Website`,
                click() {
                    shell.openExternal('https://github.com/soul-wish/cutine');
                }
            },
            {
                label: 'Report an Issue...',
                click() {
                    shell.openExternal(`https://github.com/soul-wish/cutine/issues/new?body=${encodeURIComponent(issueBody)}`);
                }
            }
        ]
    }
];

module.exports = electron.Menu.buildFromTemplate(menuTemplate);
