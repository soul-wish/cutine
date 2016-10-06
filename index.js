'use strict';
const path = require('path');
const fs = require('fs');

const electron = require('electron');

const app = electron.app;

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
    // dereference the window
    // for multiple windows store them in an array
    mainWindow = null;
}

function createMainWindow() {
    const win = new electron.BrowserWindow({
        title: app.getName(),
        show: false,
        width: 780,
        height: 540,
        minWidth: 400,
        minHeight: 540,
        titleBarStyle: 'hidden-inset',
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'browser.js'),
            nodeIntegration: false
        }
    });

    win.loadURL(`https://m.facebook.com`);


    win.on('closed', onClosed);

    win.on('page-title-updated', e => {
        e.preventDefault();
    });

    return win;
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (!mainWindow) {
        mainWindow = createMainWindow();
    }
});

app.on('ready', () => {
    mainWindow = createMainWindow();
    const page = mainWindow.webContents;

    page.on('dom-ready', () => {
        page.insertCSS(fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8'));
        mainWindow.show();
    });

    page.on('new-window', (e, url) => {
        e.preventDefault();
        electron.shell.openExternal(url);
    })
});
