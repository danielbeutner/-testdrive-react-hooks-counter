import React, { ReactElement } from 'react';
import Counter from '~Counter';
import Actions from '~Actions';

export default function App(): ReactElement {
    return (
        <>
            <Counter />
            <Actions />
        </>
    );
}
