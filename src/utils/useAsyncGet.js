import {useState, useEffect} from 'react';
export function useAsyncGet(getValue) {
    const [value, setValue] = useState(null);
    useEffect(() => {
        getValue().then(res => setValue(res))
    },[]);
    return value;
}
