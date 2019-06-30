import React, { ReactElement } from 'react';
import { useStore } from '~StoreProvider';

export default function ButtonRow(): ReactElement {
    const { dispatch, action } = useStore();

    return (
        <>
            <button
                onClick={(): void => {
                    dispatch(action.increment());
                }}
            >
                Add
            </button>
            <button
                onClick={(): void => {
                    dispatch(action.decrement());
                }}
            >
                Subtract
            </button>
            <button
                onClick={(): void => {
                    dispatch(action.reset());
                }}
            >
                Reset
            </button>
        </>
    );
}
