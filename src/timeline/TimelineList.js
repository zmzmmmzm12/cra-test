import React from 'react';

export default function TimelineList({timelines}){
    return(
        <ul>
            {timelines?.map(timeline=>(
                <li key={timeline.id}>{timeline.name}</li>
            ))}
        </ul>
    )
}