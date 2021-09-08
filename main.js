const electron = require('electron');
const {app, BrowserWindow, autoUpdater } = electron;
const path = require('path');
const isDev = !app.isPackaged;

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
    isDev && mainWindow.webContents.openDevTools();
    return mainWindow;
}

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}

app.on('ready', () => {
    const mainApp = createWindow();
    mainApp.once('ready-to-show', () => {
        setTimeout(() => {
            mainApp.show();

            const server = 'https://github.com/QuadraKOfx/gaming-sports-platform/tree/production';
            const feed = `${server}/OWNER/REPO/${process.platform}-${process.arch}/${app.getVersion()}`;
            autoUpdater.setFeedURL(feed)

            setInterval(() => {
                autoUpdater.checkForUpdates().then( (value) => {
                    console.log('Just checked for updates', value);
                })
            }, 10 * 60 * 1000)

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
