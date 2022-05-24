import {useMemo} from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
export function useLoading(value, component) {
    const resComponent = useMemo(() => {
        if(value === null) return(<LoadingSpinner/>)
        return(component)
    }, [value]);
    return resComponent;
}