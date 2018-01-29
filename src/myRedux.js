export const createStore = (reducer)=>{
    let state; //存储状态值的变量
    let listeners = []; //存储订阅函数的数组

    let getState = ()=>state; //获取状态值

    //订阅函数，返回值是取消订阅的函数
    let subscribe = (listener)=>{
        listeners.push(listener);
        return ()=>{
            listeners = listeners.filter(l=>l!==listener);
        }
    }
    //发送指令，其中action是一个纯对象，其中type属性必不可少
    let dispatch = (action)=>{
        state = reducer(state,action);
        listeners.forEach(listener=>listener());
    }
    dispatch();
    return {
        getState,
        subscribe,
        dispatch
    }
}

export const combineReducers = (reducers)=>{
    return (state={},action)=>{
        let obj = {};
        for(let key in reducers){
            if(reducers.hasOwnProperty(key)){
                obj[key] = reducers[key](state[key],action);
            }
        }
        return obj;
    }
}