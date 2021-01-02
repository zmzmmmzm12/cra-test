import React, {useEffect, useReducer} from 'react';
import store from '../common/store';
import {getNextTimeline} from '../common/mockData';
import {addTimeline}from './state';
import TimelineList from './TimelineList';


export default function TimelineMain(){
    const [,forceUpdate] =useReducer(v=>v+1,0);
    useEffect( ()=>{
        const unsubscribe = store.subscribe(() => forceUpdate());
        return ()=> unsubscribe();
    },[]);
    function onAdd(){
        const timeline=getNextTimeline();
        store.dispatch(addTimeline(timeline));
    }
    const timelines=store.getState().timeline.timelines;
    return(
        <div>
            <button onClick={onAdd}>타임라인추가</button>
            <TimelineList timelines={timelines}/>
        </div>
    )
}