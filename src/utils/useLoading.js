import {useMemo} from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

/// Хук для отображения загрузки, до момента пока value не примет значение
/// componentCostruct - функция от одного аргумент, которая строит компонент по значеннию value
/* export function useLoading(value, componentCostruct) {
    const resComponent = useMemo(() => {
        if(value) return (componentCostruct(value));
        return (<LoadingSpinner/>);
    }, [value]);
    return resComponent;
} */

export function useLoading(value) {
    const isLoading = useMemo(() => {
        return (value === null || value === undefined);
    }, [value]);
    return [isLoading , <LoadingSpinner/>];
}