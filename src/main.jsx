/**
 * Elemento <Main> del proyecto. El mismo se encarga de
 * renderizar en el DOM el componente <App> que contiene toda la aplicación.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import './styles/global.css'
import App from './components/App'

ReactDOM.render(
    <App />,
  document.getElementById('root')
)
