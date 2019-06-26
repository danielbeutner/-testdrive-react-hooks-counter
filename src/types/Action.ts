export enum ActionType {
    increment = '[Counter] increment',
    decrement = '[Counter] decrement',
    reset = '[Counter] reset'
}

export type Payload =
    | object
    | object[]
    | string
    | number
    | typeof Error
    | null
    | undefined;

export type Meta = object | object[] | null | undefined;

export interface Action {
    type: ActionType;
    payload: Payload;
    meta: Meta;
}
