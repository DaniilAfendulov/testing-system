import { useCallback } from 'react';
import { useAsyncGet } from '../../utils/useAsyncGet.js';
import { checkTest } from '../../utils/api.js';
import SubmitForm from './SubmitForm.jsx';
import LoadingBlock from '../DataBlock.jsx';

function FinishTheoryTest({onClick, answers}) {
  const search = window.location.search;
  const searchParams = new URLSearchParams(search);
  const lessonId = searchParams.get("id");
  const moduleId = searchParams.get("moduleId");
  const getData = useCallback(() =>  checkTest(moduleId, lessonId, answers), [moduleId, lessonId, answers]);
  const data = useAsyncGet(getData);
  return (
    <LoadingBlock data={data}>
      { data !== null && data !== undefined && 
        <SubmitForm 
          title={'Вы окончили тестирование! Ваш результат: ' + data + '%'}
          btnText='Закончить'
          onClick={onClick}
        />
      }
    </LoadingBlock>
  )
}

export default FinishTheoryTest