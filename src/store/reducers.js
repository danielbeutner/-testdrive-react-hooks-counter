import { increment, decrement, reset } from './actions'

export const initialState = {
	counter: 0
}

export function reducer(state = initialState, action) {
	switch (action.type) {
		case increment().toString():
			return { ...state, counter: state.counter + 1 }
		case decrement().toString():
			return { ...state, counter: state.counter - 1 }
		case reset().toString():
			return { ...state, counter: 0 }
		default:
			return state
	}
}
