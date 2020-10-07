import { app, BrowserWindow } from 'electron'
import { createWindow } from './helper'

console.log('launching app', process.argv)
app.on('ready', createWindow)
app.on('window-all-closed', () => app.quit())
