const electron = require('electron');
const {app, BrowserWindow } = electron;
const path = require('path');
const isDevElectron = require('electron-is-dev');
const isDev = isDevElectron && !app.isPackaged;
// const server = 'https://github.com/QuadraKOfx/gaming-sports-platform/tree/production';
// const feed = `${server}/QuadraKOfx/gaming-sports-platform/${process.platform}-${process.arch}/${app.getVersion()}`;

/********************
 ** UPDATES SCHEMA **
 *******************/

// autoUpdater.on('checking-for-update', () => {
//     console.log('checking-for-update')
// })
//
// autoUpdater.on('update-available', () => {
//     console.log('update-available')
// })
//
// autoUpdater.on('update-not-available', () => {
//     console.log('update-not-available')
// })
//
// if (handleSquirrelEvent(app)) {
//     // squirrel event handled and app will exit in 1000ms, so don't do anything else
//     return;
// }

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1400,
        height: 800,
        show: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
    })
    mainWindow.loadFile('index.html').catch();
    // mainWindow.removeMenu(true)
    // isDev && mainWindow.webContents.openDevTools();
    return mainWindow;
}

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}

if (!isDev) {
    // autoUpdater.setFeedURL(feed);
   // autoUpdater.checkForUpdates();
}

app.on('ready', () => {
    const mainApp = createWindow();
    mainApp.once('ready-to-show', () => {
        setTimeout(() => {
            mainApp.show();
        }, 2000)
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})


// Chromium -> web engine for rendering the UI, full Chrome-like web browser
// V8 -> engine that provides capabilities to execute, run, JS code in the browser
// Node JS(V8) -> we are able to run JS code + provides more features

// Webpack -> is a module builder, main purpose is to bundle JS files for usage in the browser
// Babel -> js a JS compiler
