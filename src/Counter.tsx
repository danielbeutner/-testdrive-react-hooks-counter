import React, { ReactElement } from 'react';
import { useStore, ActionType } from './StoreProvider';

export default function Counter(): ReactElement {
    const { state, dispatch } = useStore();

    return (
        <section className="counter">
            <div className="value">{state.counter}</div>
            <button
                onClick={(): void => {
                    dispatch({ type: ActionType.increment });
                }}
            >
                Add
            </button>
            <button
                onClick={(): void => {
                    dispatch({ type: ActionType.decrement });
                }}
            >
                Subtract
            </button>
            <button
                onClick={(): void => {
                    dispatch({ type: ActionType.reset });
                }}
            >
                Reset
            </button>
        </section>
    );
}
