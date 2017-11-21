let electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    path = require('path'),
    mainWindow

require('electron-reload')(__dirname)

function createWindow() {

    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        minWidth: 400,
        minHeight: 650,
        // maxWidth: 600,
        // maxHeight: 800,
        width: 400,
        height: 650,
        icon: path.join(__dirname, 'dev/img/logo64.png'),
        show: false
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
        // mainWindow.webContents.openDevTools();
    })

    mainWindow.on('closed', function () {
        mainWindow = null
    })

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    app.quit();
});



// console.log(app.getVersion())  // prints "ping"

const {ipcMain} = require('electron')
ipcMain.on('get-version', (event, arg) => {
    event.sender.send('app-version', app.getVersion())
})

// ipcMain.on('asynchronous-message', (event, arg) => {
//     console.log(arg)  // prints "ping"
//     event.sender.send('asynchronous-reply', 'pong')
// })
//
// ipcMain.on('synchronous-message', (event, arg) => {
//     console.log(arg)  // prints "ping"
//     event.returnValue = 'pong'
// })
