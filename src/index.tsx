import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '~Counter';
import { StoreProvider } from '~StoreProvider';

ReactDOM.render(
    <StoreProvider>
        <Counter />
    </StoreProvider>,
    document.getElementById('root')
);
