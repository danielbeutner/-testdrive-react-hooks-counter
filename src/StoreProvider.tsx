import React, {
    createContext,
    useReducer,
    useContext,
    ReactElement,
    ReactChildren,
    ReactChild
} from 'react';

export enum ActionType {
    increment = '[Counter] increment',
    decrement = '[Counter] decrement',
    reset = '[Counter] reset'
}

interface State {
    counter: number;
}

interface Action {
    type: ActionType;
    payload?: object;
}

interface Props {
    children?: ReactChild | ReactChildren;
}

const initialState: State = {
    counter: 0
};

function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case ActionType.increment:
            return { ...state, counter: state.counter + 1 };
        case ActionType.decrement:
            return { ...state, counter: state.counter - 1 };
        case ActionType.reset:
            return { ...state, counter: 0 };
        default:
            return state;
    }
}

const StoreContext = createContext({
    state: initialState,
    dispatch: ((): object => ({})) as React.Dispatch<Action>
});

export function StoreProvider(props: Props): ReactElement {
    const [state, dispatch] = useReducer(reducer, initialState);
    const store = { state, dispatch };

    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    );
}

export function useStore(): {
    state: State;
    dispatch: React.Dispatch<Action>;
} {
    return useContext(StoreContext);
}
