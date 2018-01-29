import React from 'react';
import * as TYPE from '../store/action-types';


export default class Counter extends React.Component{
    constructor(props){
        super();
        this.state = {
            number:props.store.getState().counter.number
        }
    }
    componentWillMount(){
        this.unSubscribe = this.props.store.subscribe(()=>{
            this.setState({
                number:this.props.store.getState().counter.number
            });
        });
    }
    componentWillUnmount(){
        this.unSubscribe();
    }
    render(){
        return (<div>
            <p>{this.state.number}</p>
            <button onClick={()=>{this.props.store.dispatch({type:TYPE.INCREASE,amount:3})}}>+</button>
            <button onClick={()=>{this.props.store.dispatch({type:TYPE.DECREASE,amount:2})}}>-</button>
        </div>)
    }
}