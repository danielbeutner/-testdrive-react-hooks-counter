import React, { ReactElement } from 'react';
import Counter from '~Counter';
import ButtonRow from '~ButtonRow';

export default function App(): ReactElement {
    return (
        <>
            <Counter />
            <ButtonRow />
        </>
    );
}
