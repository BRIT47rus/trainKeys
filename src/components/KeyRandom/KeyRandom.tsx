import { useState } from 'react';
import { RandomComponent } from './RandomComponent';

const randomKey = () => Math.random().toString();
export const KeyRandom = () => {
    const [_, setTreeger] = useState({});

    const rerender = () => {
        setTreeger({});
    };
    const keyTest = randomKey();

    return (
        <>
            <RandomComponent key={keyTest} name="пример юлин" />
            <button onClick={rerender}>rerender</button>
        </>
    );
};
