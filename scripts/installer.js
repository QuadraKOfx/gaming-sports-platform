const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
    .then(createWindowsInstaller)
    .catch((error) => {
        console.error(error.message || error)
        process.exit(1)
    })

function getInstallerConfig () {
    const rootPath = path.join('./')
    const outPath = path.join(rootPath, 'release-builds')
    return Promise.resolve({
        appDirectory: path.join(outPath, 'dist/'),
        authors: 'Marios Constantinou',
        noMsi: true,
        outputDirectory: path.join(outPath, 'installers'),
        exe: 'Legendary Arena Setup 0.0.0.exe',
        setupExe: 'Legendary Platform.exe',
        setupIcon: path.join(rootPath, 'assets', 'icons', 'win', 'icon.ico')
    })
}
