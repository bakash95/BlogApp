import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';


const store = configureStore();

//BrowserRouter is for reacter router to allow our app to use the methods for routing
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
