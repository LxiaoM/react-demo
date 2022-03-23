import React, { Component } from 'react';
import {withRouter} from "react-router";
import './index.less'

import SideBar from './sidebar';
import {
    Layout,
    Avatar
} from 'antd';

const { Header} = Layout

class PrimaryLayout extends Component {
    constructor() {
        super();
        this.state = {
            userInfo: {}
        }
    }

    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                {/* 侧边栏*/}
                    <SideBar/>
                    <Layout>
                    {/*    头部*/}
                        <Header style={{ background: '#001529', padding: 0 }}>
                            <div className="avatar-area">
                                <Avatar src='https://img-blog.csdnimg.cn/20190913132853727.jpg'/>
                                <span onClick={this.showDrawer} className="user-name">
                                    {this.state.userInfo.username ? this.state.userInfo.username : 'Sophia'}
                                </span>
                                |<span className="exit">退出</span>
                            </div>
                        </Header>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default withRouter(PrimaryLayout);
