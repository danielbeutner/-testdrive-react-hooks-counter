import React, { ReactElement } from 'react';
import Counter from '~Counter';
import CounterActions from '~CounterActions';

export default function App(): ReactElement {
    return (
        <>
            <Counter />
            <CounterActions />
        </>
    );
}
