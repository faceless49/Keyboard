import React from 'react'
import ReactDOM from 'react-dom'
import './features/sass/index.scss'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<App />
			</HashRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

console.log('store: ', store.getState())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
