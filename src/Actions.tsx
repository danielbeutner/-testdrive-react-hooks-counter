import React, { ReactElement } from 'react';
import { useStore } from './StoreProvider';
import { increment, decrement, reset } from './actions/counter';

export default function ButtonRow(): ReactElement {
    const { dispatch } = useStore();

    return (
        <>
            <button
                onClick={(): void => {
                    dispatch(increment());
                }}
            >
                Add
            </button>
            <button
                onClick={(): void => {
                    dispatch(decrement());
                }}
            >
                Subtract
            </button>
            <button
                onClick={(): void => {
                    dispatch(reset());
                }}
            >
                Reset
            </button>
        </>
    );
}
