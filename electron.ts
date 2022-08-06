const path = require("path")
const { app, BrowserWindow } = require("electron")
const isDev = require("electron-is-dev")

const createWindow = () => {
	const win = new BrowserWindow({
		height: 1000,
		width: 650,
	})

	win.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`)
}

app.on("ready", createWindow)
