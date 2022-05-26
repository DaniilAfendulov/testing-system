import {useMemo} from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
export function useLoading(value, componentCostruct) {
    const resComponent = useMemo(() => {
        if(value === null) return(<LoadingSpinner/>)
        return(componentCostruct(value))
    }, [value]);
    return resComponent;
}