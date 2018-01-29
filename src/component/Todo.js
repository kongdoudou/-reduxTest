import React,{Component} from 'react';
import * as TYPE from '../store/action-types';


export default class Todo extends Component{
    constructor(props){
        super();
        this.state = {
            list:props.store.getState().todo.list
        }
    }
    componentWillMount(){
        this.unsubscribe = this.props.store.subscribe(()=>{
            this.setState({
                list:this.props.store.getState().todo.list
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    handleKeyDown=(e)=>{
        if(e.keyCode===13&&e.target.value.length>0){
            this.props.store.dispatch({type:TYPE.ADD_TODO,todo:e.target.value});
            e.target.value = "";
        }
    };
    deleteTodo = (index)=>{
        this.props.store.dispatch({type:TYPE.DELETE_TODO,index:index});
    };
    render(){
        return (<div>
            <input type="text" onKeyDown={this.handleKeyDown}/>
            <ul>
                {
                    this.state.list.map((todo,index)=>(
                        <li key={index}>{todo}
                        <button onClick={()=>{this.deleteTodo(index)}}>删除</button>
                        </li>
                    ))
                }
            </ul>
        </div>)
    }
}