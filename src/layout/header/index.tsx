import React from 'react'
import './style.scss'
import logo1 from '../../assets/logo1.svg'
import logo2 from '../../assets/logo2.svg'
import { Layout, Menu, Icon } from 'antd';
const { Header } = Layout;

const AppHeader: React.FC<{}> = function AppHeader(){
  return (
    <Header className="app-header">
      <div className="logo">
        <img src={logo1} alt=""/>
        <img src={logo2} alt=""/>
      </div>
      <Menu
        className="menu"
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="title">管理员</span>
        </Menu.Item>
        <Menu.Item key="2"><Icon type="poweroff" /></Menu.Item>
      </Menu>
    </Header>
  )
}

export default AppHeader;