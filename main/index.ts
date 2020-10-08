import { app } from 'electron'
import { resolve } from 'path'
import { createWindow } from './helper'

console.log('launching app', process.argv)
console.log('. is', resolve('.'))
app.on('ready', createWindow)
app.on('window-all-closed', () => app.quit())

console.log('listening to changes...')

process.stdin.on('data', (buf) => {
  console.log('stdin:data', buf.toString())
})
