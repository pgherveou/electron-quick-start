import React from 'react'
import { spawn } from 'child_process'
import { render } from 'react-dom'
import { People } from './people'

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <People firstName="PG1" lastName="Herveou" />
      <People firstName="PG2" lastName="Herveou" />
    </div>
  )
}

render(<App />, document.getElementById('container'))

// livereload

const css = document.getElementById('css')
const cssHref = css?.getAttribute('href')

spawn('tail', ['-f', '/tmp/bbl-changes.json']).stdout.on('data', (buffer) => {
  // todo check whether change is a css change
  console.log(buffer.toString())

  // just update the href
  css?.setAttribute('href', `${cssHref}?ts=${Date.now()}`)
})
