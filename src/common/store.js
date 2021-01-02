import {createStore, combineReducers} from 'redux';
import timelineReducer from '../timeline/state';
import friendReducer from '../friend/state';

const reducer = combineReducers( {
    timeline: timelineReducer,
    friend: friendReducer,
});
const store=createStore(reducer, window._REDUX_DEVTOOLS_EXTENSION_?.());
export default store;