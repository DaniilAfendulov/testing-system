import { useCallback } from 'react'

import { getLesson } from '../utils/api.js';
import { useAsyncGet } from '../utils/useAsyncGet.js';
import { useLoading } from "../utils/useLoading.js";

import LeftControlsPanel from './ControlsPanel/LeftControlsPanel.jsx';
import TopControlsPanel from './ControlsPanel/TopControlsPanel.jsx';

import { leftControls, topControls } from './ControlsPanel/controls.js';

import CardContainer from './CardContainer.jsx';
import Card from './Card.jsx';
import LinkCard from './LinkCard.jsx';

const cardBuilder = (isDisabled, title, disabledDescription, path) => {
  if (isDisabled) {
    return <Card title={title} description={disabledDescription}/>
  }
  return <LinkCard path={path} cardProps={{title: title}} />
}

function StudentLesson() {
  const search = window.location.search;
  const searchParams = new URLSearchParams(search);
  const lessonId = searchParams.get("id");
  const moduleId = searchParams.get("moduleId");
  const url = window.location.pathname;
  const getData = useCallback(() =>  getLesson(moduleId, lessonId), [moduleId, lessonId]);
  const data = useAsyncGet(getData);
  const component = useLoading(data, ({title, isVideoDisabled, isPracticeDisabled, isTheoryDisabled}) => {
    topControls[1].path = '/student/module?id='+moduleId;
    const VideoCard = cardBuilder(isVideoDisabled, 'видео', 'Видео недоступно', url+'/video'+search);
    const PracticeCard = cardBuilder(isPracticeDisabled, 'Практический тест', 'Практический тест недоступен', url+'/practice'+search);
    const TheoryCard = cardBuilder(isTheoryDisabled, 'Теоретический тест', 'Теоретический тест недоступен', url+'/theory'+search);
    return(
      <LeftControlsPanel controls={leftControls}>
        <TopControlsPanel title={title} controls={topControls.slice(0,2)}>        
          <CardContainer>
            <>{VideoCard}</>
            <>{PracticeCard}</>
            <>{TheoryCard}</>
          </CardContainer>
        </TopControlsPanel>
      </LeftControlsPanel>
    );
  });
  return (<>{component}</>)
}

export default StudentLesson