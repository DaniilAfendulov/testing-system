import {useState, useEffect} from 'react';

/// Хук для получения данных из асинхронных операций
/// getValue - асинхронная операция(функция без аргументов)
/// если нужно передать функцию с аргументами используйте useCallback и анонимную функцию
/// например: useCallback(() => getModuleLesson(moduleId), [moduleId]);
export function useAsyncGet(getValue) {
    const [value, setValue] = useState(null);
    useEffect(() => {
        getValue().then(res => setValue(res))
    }, []);
    return value;
}
