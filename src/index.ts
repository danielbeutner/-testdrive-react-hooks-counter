import { createElement } from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider } from '~StoreProvider'
import App from '~App'

ReactDOM.render(
	createElement(StoreProvider, null, createElement(App)),
	document.getElementById('root')
)
