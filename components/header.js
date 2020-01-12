import React from "react";
import '../public/components/header.css'

import {Row,Col,Menu,Icon} from 'antd'

const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}

            >
                <span className="header-logo">木剑游侠</span>
                <span className="header-txt">江湖没什么好的,也就酒还行！</span>
            </Col>
            <Col
                className="menu-div"
                xs={0} sm={0} md={12} lg={10} xl={8} xxl={6}>
                <Menu mode="horizontal" >
                    <Menu.Item key="home">
                        <Icon type="home"/>
                        首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        <Icon type="youtube"/>
                        视频
                    </Menu.Item>
                    <Menu.Item key="life">
                        <Icon type="smile"/>
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header;