import { Action, ActionType, Payload, Meta } from '~types/Action';

type ActionCreator = Function;

export function createAction(type: ActionType): ActionCreator {
    return function action(payload: Payload, meta: Meta): Action {
        return {
            type,
            payload,
            meta
        };
    };
}
