import React, {
	createContext,
	useReducer,
	useContext,
	ReactElement,
	ReactChildren,
	ReactChild
} from 'react'
import { Action } from '~types/Action'
import * as actions from '~store/actions'
import { initialState, reducer, State } from '~store/reducers'

interface Props {
	children?: ReactChild | ReactChildren
}

const StoreContext = createContext({
	state: initialState,
	dispatch: ((): void => {}) as React.Dispatch<Action>,
	action: actions
})

export function StoreProvider(props: Props): ReactElement {
	const [state, dispatch] = useReducer(reducer, initialState)
	const store = {
		state,
		dispatch,
		action: actions
	}

	return (
		<StoreContext.Provider value={store}>
			{props.children}
		</StoreContext.Provider>
	)
}

export function useStore(): {
	state: State
	dispatch: React.Dispatch<Action>
	action: typeof actions
} {
	return useContext(StoreContext)
}
