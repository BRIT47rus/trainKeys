import { useEffect, useRef } from 'react';

export const RandomComponent = ({ name }: { name: string }) => {
    const nameRef = useRef(name);

    useEffect(() => {
        nameRef.current = name;
    }, [name]);
    useEffect(() => {
        console.log(nameRef.current, 'смонтирован');
        return () => {
            console.log(nameRef.current, ' демонтирован');
        };
    }, [nameRef]);

    return <h2>{name}</h2>;
};
