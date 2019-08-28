import {
	createElement,
	createContext,
	Dispatch,
	ReactChild,
	ReactChildren,
	ReactElement,
	useContext,
	useMemo,
	useReducer
} from 'react'
import { Action } from '~types/Action'
import * as actions from '~store/actions'
import { initialState, reducer, State } from '~store/reducers'

interface Props {
	children?: ReactChild | ReactChildren
}

type Actions = typeof actions

type Context = [State, Dispatch<Action>, Actions]

const StoreContext = createContext<Context | null>(null)

export function StoreProvider(props: Props): ReactElement {
	const [state, dispatch] = useReducer(reducer, initialState)
	const store = useMemo((): Context => [state, dispatch, actions], [state])

	return createElement(
		StoreContext.Provider,
		{ value: store },
		props.children
	)
}

export function useStore(): Context {
	const context = useContext(StoreContext)

	if (!context) {
		throw new Error(
			'StoreProvider was not found. Please add <StoreProvider> component to your App.'
		)
	}

	return context
}
