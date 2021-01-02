import React from 'react';
import TimelineMain from './timeline/TimelineMain';
import FriendMain from './friend/FriendMain';

import{
  addTimeline, editTimeline, removeTimeline,increaseNextPage
} from './timeline/state';
import {addFriend, editFriend,removeFriend} from './friend/state';
import store from './common/store';


function App() {
  return (
    <div className="App">
      <FriendMain/>
      <TimelineMain/>
    </div>
  );
}

export default App;
