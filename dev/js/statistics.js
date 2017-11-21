
const {ipcRenderer} = require('electron')
const {shell} = require('electron')



ipcRenderer.on('app-version', (event, arg) => {
    document.querySelector('footer #app-version').innerText = 'v.' + arg
})
ipcRenderer.send('get-version', 'ping')

document.querySelector('footer').onclick = function () {
    shell.openExternal('http://stekolschikov.info/')
}






