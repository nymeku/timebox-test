const path = require("path")
const { BrowserWindow, app } = require("electron")

function createWindow() {
	const window = new BrowserWindow({
		width: 1920,
		height: 1080,
	})

	window.loadFile("/public/index.html")
}

app.whenReady().then(() => {
	createWindow()
})
