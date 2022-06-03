import { useCallback } from 'react';

import { getModuleLesson } from '../utils/api.js';
import { useAsyncGet } from '../utils/useAsyncGet.js';

import LeftControlsPanel from './ControlsPanel/LeftControlsPanel.jsx';
import TopControlsPanel from './ControlsPanel/TopControlsPanel.jsx';
import CardListWindow from './CardListWindow.jsx';

import { leftControls, topControls } from './ControlsPanel/controls.js';
import LoadingBlock from './DataBlock.jsx';

function StudentModule() {
  const search = window.location.search;
  const moduleId = new URLSearchParams(search).get("id");
  const getPath = useCallback(({id}) => 
    '/student/lesson?' + new URLSearchParams({moduleId:moduleId, id:id}).toString(),
  [moduleId]);
  const getData = useCallback(() => getModuleLesson(moduleId), [moduleId]);
  const data = useAsyncGet(getData);

  return (
   <LeftControlsPanel controls={leftControls}>
        <LoadingBlock data={data}>
          { data && <>
            <TopControlsPanel title={data.title} controls={topControls.slice(0,1)}>
              <CardListWindow cards={data.cards} getPath={getPath}/>
            </TopControlsPanel>
          </>}
        </LoadingBlock>
    </LeftControlsPanel>
  )
}

export default StudentModule