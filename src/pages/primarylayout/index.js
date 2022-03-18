import React, { Component } from 'react';
import {withRouter} from "react-router";

import SideBar from './sidebar';
import {
    Layout,
} from 'antd';

class PrimaryLayout extends Component {
    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                {/* 侧边栏*/}
                    <SideBar/>
                </Layout>
            </div>
        )
    }
}
export default withRouter(PrimaryLayout);
