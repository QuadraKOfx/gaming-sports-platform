const os = require('os');
const electron = require('electron');
const {app, BrowserWindow, autoUpdater, dialog} = electron;
const path = require('path');
const isDevElectron = require('electron-is-dev');
const isDev = isDevElectron && !app.isPackaged;

const version = app.getVersion();
const platform = os.platform() + '_' + os.arch();

const updaterFeedURL = 'https://legendary-platform.herokuapp.com/' + platform + '/' + version;


function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1400,
        height: 800,
        show: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
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

app.on('ready', () => {
    const mainApp = createWindow();
    mainApp.once('ready-to-show', () => {
        setTimeout(() => {
            mainApp.show();
            if (!isDev) {
                appUpdater();
            }
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

/********************
 ** UPDATES SCHEMA **
 *******************/

function appUpdater() {
    autoUpdater.setFeedURL(updaterFeedURL);

    autoUpdater.on('error', err => console.log(err));
    autoUpdater.on('checking-for-update', () => console.log('checking-for-update'));
    autoUpdater.on('update-available', () => console.log('update-available'));
    autoUpdater.on('update-not-available', () => console.log('update-not-available'));

    // Ask the user if update is available
    autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
        let message = app.getName() + ' ' + releaseName + ' is now available. It will be installed the next time you restart the application.';
        if (releaseNotes) {
            const splitNotes = releaseNotes.split(/[^\r]\n/);
            message += '\n\nRelease notes:\n';
            splitNotes.forEach(notes => {
                message += notes + '\n\n';
            });
        }
        // Ask user to update the app
        dialog.showMessageBox({
            type: 'question',
            buttons: ['Install and Relaunch', 'Later'],
            defaultId: 0,
            message: 'A new version of ' + app.getName() + ' has been downloaded',
            detail: message
        }, response => {
            if (response === 0) {
                setTimeout(() => autoUpdater.quitAndInstall(), 1);
            }
        }).then();
    });
    // init for updates
    autoUpdater.checkForUpdates();
}


// Chromium -> web engine for rendering the UI, full Chrome-like web browser
// V8 -> engine that provides capabilities to execute, run, JS code in the browser
// Node JS(V8) -> we are able to run JS code + provides more features

// Webpack -> is a module builder, main purpose is to bundle JS files for usage in the browser
// Babel -> js a JS compiler
