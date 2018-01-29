import React from 'react';
import {render} from 'react-dom';
import * as TYPE from './store/action-types';
import {Provider} from 'react-redux';
import Counter3 from './component/counter3';
import {store} from './store';


render(<Provider store={store}>
    <Counter3/>
</Provider>,document.querySelector("#root"));