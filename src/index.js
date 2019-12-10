import { createElement } from 'react'
import ReactDOM from 'react-dom'
import { createStoreProvider } from './store'
import App from '~App'
import { reducer, initialState } from './store/reducers'

const StoreProvider = createStoreProvider(reducer, initialState)

ReactDOM.render(
	createElement(StoreProvider, null, createElement(App)),
	document.getElementById('root')
)
