import React from 'react'
import App from './App'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux'

import thunk from 'redux-thunk'


import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)));
function Index() {
    return (
        <div>
            <h1>index</h1>
        </div>
    )
}

ReactDom.render(
    <Provider store={store}>
             <App />
    </Provider>


,document.getElementById('root'));

