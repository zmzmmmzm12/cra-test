import React from 'react';
import TimelineMain from './timeline/TimelineMain';
import FriendMain from './friend/FriendMain';

import {Provider} from 'react-redux';
import store from './common/store';


function App() {
  return (
    <Provider store={store}>
    <div>
      <FriendMain/>
      <TimelineMain/>
    </div>
    </Provider>
  );
}

export default App;
