const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width : 500,
        height : 500,
        resizable: false,
        webPrefrences : {
            preload: path.join(__dirname, 'path.js')
        }
    })

    win.loadURL('http://localhost:3000/')
    win.title('Namaz Reminder App');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
})

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') app.quit();
})