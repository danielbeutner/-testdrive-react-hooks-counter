import React, { ReactElement } from 'react';
import { useStore, ActionType } from './StoreProvider';

export default function ButtonRow(): ReactElement {
    const { dispatch } = useStore();
    return (
        <>
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
        </>
    );
}
