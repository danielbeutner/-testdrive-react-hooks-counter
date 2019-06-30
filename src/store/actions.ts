import { createAction } from '~utils/createAction';
import { ActionType } from '~types/Action';

export const increment = createAction(ActionType.increment);
export const decrement = createAction(ActionType.decrement);
export const reset = createAction(ActionType.reset);
