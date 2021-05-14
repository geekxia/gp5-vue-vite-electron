// 语法：CommonJS语法

const {
	app,
	BrowserWindow
} = require('electron')

const path = require('path')
const isDev = require('electron-is-dev')

// 创建一个容器窗口
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
	// 区分生产环境和开发环境
	if(isDev) {
		win.loadURL('http://localhost:8888')
		win.webContents.openDevTools()
	}else{
		win.loadFile(path.join(__dirname, './dist/index.html'))
	}
}

// Electron应用的相关事件
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
