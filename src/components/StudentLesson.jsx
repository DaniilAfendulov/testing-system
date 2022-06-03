import { useCallback, useMemo } from 'react'

import { getLesson } from '../utils/api.js';
import { useAsyncGet } from '../utils/useAsyncGet.js';

import LeftControlsPanel from './ControlsPanel/LeftControlsPanel.jsx';
import TopControlsPanel from './ControlsPanel/TopControlsPanel.jsx';

import { leftControls, topControls } from './ControlsPanel/controls.js';

import CardContainer from './CardContainer.jsx';
import Card from './Card.jsx';
import LinkCard from './LinkCard.jsx';
import LoadingBlock from './DataBlock.jsx';

const cardBuilder = (isDisabled, title, disabledDescription, path) => {
  if (isDisabled) {
    return <Card title={title} description={disabledDescription}/>
  }
  return <LinkCard path={path} cardProps={{title: title}} />
}

const videoCardFactory = (isDisabled, url, search) => cardBuilder(isDisabled, 'видео', 'Видео недоступно', url+'/video'+search);
const practiceCardFactory = (isDisabled, url, search) => cardBuilder(isDisabled, 'Практический тест', 'Практический тест недоступен', url+'/practice'+search);
const theoryCardFactory = (isDisabled, url, search) => cardBuilder(isDisabled, 'Теоретический тест', 'Теоретический тест недоступен', url+'/theory'+search);

const videoCardBlock = (_, url, search) => videoCardFactory(true, url, search);
const practiceCardBlock = (_, url, search) => practiceCardFactory(true, url, search);

function StudentLesson() {
  const url = window.location.pathname;
  const search = window.location.search;
  const searchParams = new URLSearchParams(search);
  const lessonId = searchParams.get("id");
  const moduleId = searchParams.get("moduleId");

  const getData = useCallback(() =>  getLesson(moduleId, lessonId), [moduleId, lessonId]);
  const data = useAsyncGet(getData);

  topControls[1].path = useMemo(() => '/student/module?id='+moduleId, [moduleId]);

  return (
    <LeftControlsPanel controls={leftControls}>
      <LoadingBlock data={data}>
        { data &&
          <>
            <TopControlsPanel title={data.title} controls={topControls.slice(0,2)}>  
              <CardContainer>
                <>{videoCardBlock(data.isVideoDisabled, url, search)}</>
                <>{practiceCardBlock(data.isPracticeDisabled, url, search)}</>
                <>{theoryCardFactory(data.isTheoryDisabled, url, search)}</>
              </CardContainer>
            </TopControlsPanel>
          </>
        }
      </LoadingBlock> 
    </LeftControlsPanel>
  )
}

export default StudentLesson