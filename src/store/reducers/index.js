import todo_reducer  from './todo';
import counter_reducer from './counter';
import {combineReducers} from '../../myRedux';

export const reducer = combineReducers({
    todo:todo_reducer,
    counter:counter_reducer
});