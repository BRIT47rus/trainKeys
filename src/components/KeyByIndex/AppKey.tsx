import { useEffect, useState } from 'react';
import { KeyIndex } from './Lists';

const keyArray = ['one', 'two', 'three', 'tho', 'five', 'six'];

export const AppKey = () => {
    const [data, setData] = useState(keyArray);

    const handleRemove = (id: number) => {
        setData((prev) => prev.filter((_, index) => index !== id));
    };

    return (
        <div>
            {data.map((item, idx) => (
                <KeyIndex
                    key={idx}
                    itemID={idx}
                    name={item}
                    handleRemove={handleRemove}
                />
            ))}
        </div>
    );
};
