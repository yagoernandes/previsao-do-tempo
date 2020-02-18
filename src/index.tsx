import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'

import { Provider } from 'react-redux'
import store from './store'

require('dotenv').config()

const aplicationEntryPoint = (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(aplicationEntryPoint, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
