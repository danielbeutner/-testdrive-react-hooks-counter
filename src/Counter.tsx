import React, { ReactElement } from 'react';
import { useStore } from '~StoreProvider';

export default function Counter(): ReactElement {
    const { state } = useStore();

    return (
        <section className="counter">
            <div className="value">{state.counter}</div>
        </section>
    );
}
