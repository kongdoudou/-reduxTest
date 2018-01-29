import {createStore} from "../myRedux";
import {reducer} from './reducers';

export const store = createStore(reducer);
