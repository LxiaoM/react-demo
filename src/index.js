import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {Router, Route} from "react-router-dom";
// import {Provider} from 'react-redux';
// import store from './redux';
import {createBrowserHistory} from 'history';
import Login from '../src/pages/login';
import PrimaryLayout from '../src/pages/primarylayout';
// import './index.less';
// import 'antd/dist/antd.css'


const history = createBrowserHistory();


ReactDOM.render(
    // <Provider store={store}>
        <Router history={history}>
            {/*    登录页面*/}
            <Route path="/login" component={Login}></Route>
            {/* 使用路由的钩子函数 */}
            <Route path="/" component={PrimaryLayout}/>
        </Router>,
    // </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
