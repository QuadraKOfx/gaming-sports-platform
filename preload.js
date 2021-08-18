const {contextBridge} = require('electron');

contextBridge.exposeInMainWorld('e_alert', {
    triggerAlert(message) {
        alert(message);
    }
})
