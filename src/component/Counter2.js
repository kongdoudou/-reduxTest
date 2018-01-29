import React,{Component} from 'react';
import * as TYPE from '../store/action-types';
import connect from '../connect';

class Counter2 extends Component{
    render(){
        return (<div>
            <p>{this.props.num}</p>
            <button onClick={this.props.onincrease}>+</button>
            <button onClick={this.props.ondecrease}>-</button>
        </div>)
    }
}
let mapStateToProps = (state)=>{
    return state;
};
//把dispatch方法映射成UI组件的属性
let mapDispatchToProps = (dispatch)=>{
    return {
        onincrease:()=>{dispatch({type:TYPE.INCREASE})},
        ondecrease:()=>{dispatch({type:TYPE.DECREASE})}
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Counter2);

