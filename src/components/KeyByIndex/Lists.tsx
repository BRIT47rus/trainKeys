import { useEffect, useRef } from 'react';

export const KeyIndex = ({
    itemID,
    name,
    handleRemove,
}: {
    itemID: number;
    name: string;
    handleRemove: (id: number) => void;
}) => {
    const prevRef = useRef(undefined);

    useEffect(() => {
        console.log('предыдущее состояние изменилось ', prevRef, 'комп', name);
        prevRef.current = itemID;
    }, [prevRef]);

    useEffect(() => {
        console.log(itemID, ' смонтировался', name);
        return () => {
            console.log(itemID, ' размонтироваля', name);
        };
    }, [itemID]);

    return (
        <div onClick={() => handleRemove(itemID)}>
            <span>{itemID + 1}</span>
            <span>{name}</span>
        </div>
    );
};
