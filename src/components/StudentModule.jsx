import { useCallback } from 'react';

import { getModuleLesson } from '../utils/api.js';
import { useAsyncGet } from '../utils/useAsyncGet.js';
import { useLoading } from "../utils/useLoading.js";

import LeftControlsPanel from './ControlsPanel/LeftControlsPanel.jsx';
import TopControlsPanel from './ControlsPanel/TopControlsPanel.jsx';
import CardListWindow from './CardListWindow.jsx';

import { leftControls, topControls } from './ControlsPanel/controls.js';

function StudentModule() {
  const search = window.location.search;
  const moduleId = new URLSearchParams(search).get("id");
  const getPath = useCallback(({id}) => 
    '/student/lesson?' + new URLSearchParams({moduleId:moduleId, id:id}).toString(),
  [moduleId]);
  const getData = useCallback(() => getModuleLesson(moduleId), [moduleId]);
  const data = useAsyncGet(getData);

  const [isLoading, LoadComponent] = useLoading(data);  
  return (
    <>
      { isLoading 
      ? <>{LoadComponent}</>
      : <LeftControlsPanel controls={leftControls}>
          <TopControlsPanel title={data.title} controls={topControls.slice(0,1)}>
            <CardListWindow cards={data.cards} getPath={getPath}/>
          </TopControlsPanel>
        </LeftControlsPanel>
      }
    </>
  )
}

export default StudentModule