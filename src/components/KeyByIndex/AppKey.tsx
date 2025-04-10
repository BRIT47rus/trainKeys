import { useCallback, useState } from 'react';
import { KeyIndex } from './Lists';

const keyArray = ['one', 'two', 'three', 'tho', 'five', 'six'];

export const AppKey = () => {
    const [data, setData] = useState(keyArray);

    const handleRemove = (id: string) => {
        setData((prev) => prev.filter((item) => item !== id));
    };

    return (
        <div>
            {data.map((item) => (
                <KeyIndex key={item} name={item} handleRemove={handleRemove} />
            ))}
        </div>
    );
};
