import React from 'react'
import logo from './logo.svg'
import './App.css'
import Contador from './Hooks/hook_estado'
import Efecto from './Hooks/hook_efecto';


function App() {
  return (
    <div className='App'>
      <Contador />
      <hr />
      <Efecto />

      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
