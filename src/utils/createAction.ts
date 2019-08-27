import { Action, ActionType, ActionCreator } from '~types/Action'

export function createAction(type: ActionType): ActionCreator {
	return function action(): Action {
		return {
			type
		}
	}
}
