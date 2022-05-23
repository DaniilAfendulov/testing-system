import { useMemo} from 'react'
import LeftControlsPanel from "../components/ControlsPanel/LeftControlsPanel"
import TopControlsPanel from '../components/ControlsPanel/TopControlsPanel'

import leftContent from '../resources/leftContent.png'
import leftContentAlt from '../resources/leftContent_hover.png'
import leftStat from '../resources/leftStat.png'
import leftStatAlt from '../resources/leftStat_hover.png'


const controls= [
  {
    id:1,
    label:'Контент',
    img: leftContent,
    altimg: leftContentAlt
  },
  {
    id:2,
    label:'Статистика',
    img: leftStat,
    altimg: leftStatAlt
  },
  {
    id:3,
    label:'Статистика',
    img: leftStat,
    altimg: leftStatAlt
  },
  {
    id:4,
    label:'Статистика',
    img: leftStat,
    altimg: leftStatAlt
  },
  {
    id:5,
    label:'Статистика',
    img: leftStat,
    altimg: leftStatAlt
  },
  {
    id:6,
    label:'Статистика',
    img: leftStat,
    altimg: leftStatAlt
  }
];

const LeftPanelControlPage = () => {
  return (
    <div className='d-flex flex-row min-vw-100 min-vh-100'>
      <LeftControlsPanel controls={controls}>
        <TopControlsPanel controls={controls} title='Список модулей'>
        </TopControlsPanel>
      </LeftControlsPanel>
    </div>
  )
}

export default LeftPanelControlPage