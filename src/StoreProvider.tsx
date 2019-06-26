import React, {
    createContext,
    useReducer,
    useContext,
    ReactElement,
    ReactChildren,
    ReactChild
} from 'react';
import { Action } from '~types/Action';
import { initialState, reducer, State } from '~reducers/counter';

interface Props {
    children?: ReactChild | ReactChildren;
}

const StoreContext = createContext({
    state: initialState,
    dispatch: ((): unknown => ({})) as React.Dispatch<Action>
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
