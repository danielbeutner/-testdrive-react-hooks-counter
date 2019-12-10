import {
	createElement,
	createContext,
	useContext,
	useMemo,
	useReducer
} from 'react'

const StoreContext = createContext(null)

export function useStore() {
	const context = useContext(StoreContext)

	if (!context) {
		throw new Error(
			'StoreProvider was not found. Please add <StoreProvider> component to your App.'
		)
	}

	return context
}

export function createStoreProvider(reducer, initialState) {
	return function StoreProvider(props) {
		const [state, dispatch] = useReducer(reducer, initialState)
		const store = useMemo(() => {
			return [state, dispatch]
		}, [state])

		return createElement(
			StoreContext.Provider,
			{ value: store },
			props.children
		)
	}
}

export function createAction(type) {
	return () => ({
		type,
		toString() {
			return type
		}
	})
}
