import React from 'react';
import {render} from 'react-dom';
import Counter2 from './component/Counter2';
import Provider from './component/Provider';
import * as TYPE from './store/action-types';
import {createStore} from './myRedux';


let reducer = (state={num:0},action)=>{
    if(!action) return state;
    switch(action.type){
        case TYPE.INCREASE:
            state = {num:state.num+1};
            break;
        case TYPE.DECREASE:
            state = {num:state.num-1};
            break;
        default:
            break;
    }
    return state;
};

let store = createStore(reducer);


render(<Provider store={store}>
    <Counter2/>
</Provider>,document.querySelector("#root"));


