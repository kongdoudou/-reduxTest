import * as TYPE from '../action-types';

let reducer =(state={list:[]},action)=>{
    if(!action) return state;
    switch(action.type){
        case TYPE.ADD_TODO:
            return state = {list:[...state.list,action.todo]};
        case TYPE.DELETE_TODO:
            let todos = state.list;
            todos.splice(action.index,1);
            return state = {list:[...todos]};
        default:
            return state;
    }
};
export default reducer;