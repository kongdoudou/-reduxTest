import React,{Component} from 'react';

import * as TYPE from '../store/action-types';
import {createStore} from '../myRedux';

let reducer = (state={number:0},action)=>{
    if(!action) return state;
    switch(action.type){
        case TYPE.INCREASE:
            state = {number:state.number+action.amount};
            break;
        case TYPE.DECREASE:
            state = {number:state.number-action.amount};
            break;
        default:
            return state;
    }
    return state;
};

let store = createStore(reducer);


export default class Counter2 extends Component{
    constructor(props){
        super();
        //其实就是建立了从store中state对象到当前组件状态的映射
        this.state = {
            number:store.getState().number
        }
    }
    componentWillMount(){
        this.unSubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState().number
            })
        })
    }
    componentWillUnmount(){
        this.unSubscribe();
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={()=>{
                    store.dispatch({
                        type:TYPE.INCREASE,
                        amount:2
                    })
                }}>+</button>
                <button onClick={()=>{
                    store.dispatch({
                        type:TYPE.DECREASE,
                        amount:1
                    })
                }}>-</button>
            </div>
        )
    }
}