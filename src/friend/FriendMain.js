import React, {useEffect, useReducer} from 'react';
import store from '../common/store';
import {getNextFriend} from '../common/mockData';
import {addFriend, setAgeLimit, setShowLimit}from '../state/state';
import FriendList from './FriendList';
import {getAgeLimit, getShowLimit, getFriendsWithAgeLimit,getFriendsWithAgeShowLimit}from '../state/selector';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import NumberSelect from './NumberSelect';
import { MAX_AGE_LIMIT,MAX_SHOW_LIMIT } from './common';


export default function FriendMain(){
    const [
        ageLimit,showLimit,
        friendsWithAgeLimit,
        friendsWithAgeShowLimit
    ]=useSelector(state=>[
        getAgeLimit(state),
        getShowLimit(state),
        getFriendsWithAgeLimit(state),
        getFriendsWithAgeShowLimit(state),
       ],shallowEqual);
    const dispatch=useDispatch();
    function onAdd(){
        const friend=getNextFriend();
        store.dispatch(addFriend(friend));
    }
   
    return(
        <div>
            <button onClick={onAdd}>친구추가</button><br/>
            <NumberSelect
                onChange={v=>dispatch(setAgeLimit(v))}
                value={ageLimit}
                options={AGE_LIMIT_OPTIONS}
                postfix="세 이하만 보기"
            />
            <FriendList friends={friendsWithAgeLimit}/>
            <NumberSelect
                onChange={v=>dispatch(setShowLimit(v))}
                value={showLimit}
                options={SHOW_LIMIT_OPTIONS}
                postfix="명 이하만 보기(연령 제한 적용)"
            />
            <FriendList friends={friendsWithAgeShowLimit}/>
        </div>
    )
}

const AGE_LIMIT_OPTIONS=[15,20,25,MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS=[2,4,6,MAX_SHOW_LIMIT];