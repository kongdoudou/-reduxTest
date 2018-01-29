import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as TYPE from '../store/action-types';

class Counter3 extends Component{
    render(){
        return (<div>
            <p>{this.props.number}</p>
            <button onClick={this.props.onincrease}>+</button>
            <button onClick={this.props.ondecrease}>-</button>
        </div>)
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        onincrease:()=>{dispatch({type:TYPE.INCREASE,amount:1})},
        ondecrease:()=>{dispatch({type:TYPE.DECREASE,amount:1})}
    }
};

export default connect((state)=>({...state.counter}),mapDispatchToProps)(Counter3);