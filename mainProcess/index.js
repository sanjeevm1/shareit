
const {app,BrowserWindow, ipcMain} = require("electron")
require("dotenv").config()
require("../express/server.js")
//const generateQR = require("../renderProcess/generateQR.js")

function createWindow(){

    const win = new BrowserWindow({
        width:800,
        height:500
    })

    win.loadFile("renderProcess/index.html")
}


app.on("ready",()=>createWindow())

app.on("window-all-closed",()=>{
    app.quit()
})