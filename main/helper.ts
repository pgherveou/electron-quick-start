import { BrowserWindow } from 'electron'
import { resolve } from 'path'

export function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,

    webPreferences: {
      nodeIntegrationInWorker: true,
      nodeIntegration: true,
    },
  })

  const htmlFile = resolve('index.html')
  mainWindow.loadFile(htmlFile)
}
