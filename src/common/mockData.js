const friends=[
    {name:'쯔위', age:15},
    {name:'수지', age:20},
    {name:'아이유', age:25},
    {name:'손나은', age:30},
]

const timelines=[
    {name:'점심 노맛이당당', likes:0},
    {name:'나는 멋지다', likes:10},
    {name:'호텔에 놀러 갔따', likes:20},
    {name:'비싼 폰을 사서 좋다', likes:30},
]

function makeDateGenerator(items){
    let itemIndex=0;
    return function getNextDate(){
        const item=items[itemIndex % items.length];
        itemIndex+=1;
        return {...item, id:itemIndex}
    }
}

export const getNextFriend=makeDateGenerator(friends);
export const getNextTimeline=makeDateGenerator(timelines);