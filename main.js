const electron = require('electron');
const {app, BrowserWindow, autoUpdater } = electron;
const path = require('path');
const isDevElectron = require('electron-is-dev');
const isDev = isDevElectron && !app.isPackaged;
const server = 'https://github.com/QuadraKOfx/gaming-sports-platform/tree/production';
const feed = `${server}/QuadraKOfx/gaming-sports-platform/${process.platform}-${process.arch}/${app.getVersion()}`;

/********************
 ** UPDATES SCHEMA **
 *******************/

autoUpdater.on('checking-for-update', () => {
    console.log('checking-for-update')
})

autoUpdater.on('update-available', () => {
    console.log('update-available')
})

autoUpdater.on('update-not-available', () => {
    console.log('update-not-available')
})

if (handleSquirrelEvent(app)) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
}

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
    autoUpdater.setFeedURL(feed);
    autoUpdater.checkForUpdates();
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


function handleSquirrelEvent(application) {
    if (process.argv.length === 1) {
        return false;
    }

    const ChildProcess = require('child_process');
    const path = require('path');

    const appFolder = path.resolve(process.execPath, '..');
    const rootAtomFolder = path.resolve(appFolder, '..');
    const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
    const exeName = path.basename(process.execPath);

    const spawn = function(command, args) {
        let spawnedProcess, error;

        try {
            spawnedProcess = ChildProcess.spawn(command, args, {
                detached: true
            });
        } catch (error) {}

        return spawnedProcess;
    };

    const spawnUpdate = function(args) {
        return spawn(updateDotExe, args);
    };

    const squirrelEvent = process.argv[1];
    switch (squirrelEvent) {
        case '--squirrel-install':
        case '--squirrel-updated':
            // Optionally do things such as:
            // - Add your .exe to the PATH
            // - Write to the registry for things like file associations and
            //   explorer context menus

            // Install desktop and start menu shortcuts
            spawnUpdate(['--createShortcut', exeName]);

            setTimeout(application.quit, 1000);
            return true;

        case '--squirrel-uninstall':
            // Undo anything you did in the --squirrel-install and
            // --squirrel-updated handlers

            // Remove desktop and start menu shortcuts
            spawnUpdate(['--removeShortcut', exeName]);

            setTimeout(application.quit, 1000);
            return true;

        case '--squirrel-obsolete':
            // This is called on the outgoing version of your app before
            // we update to the new version - it's the opposite of
            // --squirrel-updated

            application.quit();
            return true;
    }
};
