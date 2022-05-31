import {} from 'react'

import { getTheoryTest } from '../utils/api.js';
import { useAsyncGet } from '../utils/useAsyncGet.js';
import { useLoading } from "../utils/useLoading.js";

import LeftControlsPanel from './ControlsPanel/LeftControlsPanel.jsx';
import TopControlsPanel from './ControlsPanel/TopControlsPanel.jsx';

import { leftControls, topControls} from '../ControlsPanel/controls.js';

function TheoryTest() {
    const search = window.location.search;
    const searchParams = new URLSearchParams(search);
    const lessonId = searchParams.get("id");
    const moduleId = searchParams.get("moduleId");
    const getData = useCallback(() =>  getTheoryTest(moduleId, lessonId), [moduleId, lessonId]);
    const data = useAsyncGet(getData);

    const component = useLoading(data, ({title}) => {
        topControls[1].path = '/student/module?id='+moduleId;
        topControls[2].path = '/student/lesson?id='+lessonId;
        return(
          <LeftControlsPanel controls={leftControls}>
            <TopControlsPanel title="Теоретический тест" controls={topControls.slice(0,3)}>
                <StartTheoryTest/>
            </TopControlsPanel>
          </LeftControlsPanel>
        );
      });
      return (<>{component}</>)
}

export default TheoryTest