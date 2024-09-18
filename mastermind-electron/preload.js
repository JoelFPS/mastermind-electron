const { ipcRenderer, contextBridge } = require('electron');
function init() {
    window.ipcRenderer = ipcRenderer
    window.dirname=__dirname
}
init();