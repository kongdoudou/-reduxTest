import * as TYPE from '../action-types';

let reducer = (state={number:0},action)=>{
    if(!action) return state;
    switch(action.type){
        case TYPE.INCREASE:
            return state = {number:state.number+action.amount};
        case TYPE.DECREASE:
            return state = {number:state.number-action.amount};
        default:
            return state;
    }
};

export default reducer;