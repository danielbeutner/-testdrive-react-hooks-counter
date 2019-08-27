import { Action, ActionType } from '~types/Action'

export interface State {
	counter: number
}

export const initialState: State = {
	counter: 0
}

export function reducer(state = initialState, action: Action): State {
	switch (action.type) {
		case ActionType.increment:
			return { ...state, counter: state.counter + 1 }
		case ActionType.decrement:
			return { ...state, counter: state.counter - 1 }
		case ActionType.reset:
			return { ...state, counter: 0 }
		default:
			return state
	}
}
