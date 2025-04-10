import { useEffect, useRef } from 'react';

export const KeyIndex = ({
    name,
    handleRemove,
}: {
    name: string;
    handleRemove: (id: string) => void;
}) => {
    const prevRef = useRef(undefined);

    useEffect(() => {
        console.log('предыдущее состояние', prevRef, '-->', name);
        prevRef.current = name;
    }, [prevRef]);

    useEffect(() => {
        console.log(name, ' смонтировался');
        return () => {
            console.log(name, ' размонтироваля');
        };
    }, [name]);

    return (
        <div onClick={() => handleRemove(name)}>
            {/* <span>{itemID + 1}</span> */}
            <span>{name}</span>
        </div>
    );
};
