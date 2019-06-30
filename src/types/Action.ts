export enum ActionType {
    increment = '[Counter] increment',
    decrement = '[Counter] decrement',
    reset = '[Counter] reset'
}

export type ActionCreator = () => Action;

export interface Action {
    type: ActionType;
}
