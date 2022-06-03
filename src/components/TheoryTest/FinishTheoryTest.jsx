import SubmitForm from './SubmitForm.jsx';

function FinishTheoryTest({onClick}) {
  return (
    <SubmitForm 
      title={'Вы окончили тестирование! Ваш результат:'}
      btnText={'Закончить'}
      onClick={onClick}
    />
  )
}

export default FinishTheoryTest