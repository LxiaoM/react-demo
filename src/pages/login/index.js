import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends  Component {
    render () {
        return (
            <div className="login-content">
                我是登录页面
            </div>
        )
    }
}

// Login组件不在<Route >的匹配列表里，要想访问this.props里的属性，写法如下：
export default withRouter(Login)
