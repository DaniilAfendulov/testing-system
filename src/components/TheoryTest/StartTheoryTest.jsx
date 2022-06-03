import SubmitForm from './SubmitForm.jsx';

function StartTheoryTest({onClick}) {
  return (
    <SubmitForm 
      title={'Вас приветсвует модуль тестирования. Для начала теста нажмите "Начать тест". Успехов!'}
      btnText={'начать тест'}
      onClick={onClick}
    />
  )
}

export default StartTheoryTest