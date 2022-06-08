import { useCallback, useMemo } from 'react'

import { getTheoryTest } from '../../utils/api.js';
import { useAsyncGet } from '../../utils/useAsyncGet.js';

import LeftControlsPanel from '../ControlsPanel/LeftControlsPanel.jsx';
import TopControlsPanel from '../ControlsPanel/TopControlsPanel.jsx';

import { leftControls, topControls} from '../ControlsPanel/controls.js';
import LoadingBlock from '../DataBlock.jsx';
import TestBlock from './TestBlock.jsx';


function TheoryTest() {
  const search = window.location.search;
  const searchParams = new URLSearchParams(search);
  const lessonId = searchParams.get("id");
  const moduleId = searchParams.get("moduleId");

  topControls[1].path = useMemo(() => '/student/module?id='+moduleId, [moduleId]);
  topControls[2].path = useMemo(() => '/student/lesson'+search, [search]);

  const getData = useCallback(() =>  getTheoryTest(moduleId, lessonId), [moduleId, lessonId]);
  const data = useAsyncGet(getData);

  return (
    <LeftControlsPanel controls={leftControls}>
      <TopControlsPanel title="Теоретический тест" controls={topControls.slice(0,3)}>
        <LoadingBlock data={data}>
          { data && 
            <TestBlock data={data}/>
          }
        </LoadingBlock>
      </TopControlsPanel>
    </LeftControlsPanel>
  )
}

export default TheoryTest