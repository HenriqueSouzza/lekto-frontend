import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, CalendarOutlined, SettingOutlined } from '@ant-design/icons';
import Router from '../../pages/router';
import 'antd/dist/antd.less';
import './index.css';
import logo from '../../assets/images/logo_purple.png';
import { Link } from 'react-router-dom';

const { Content } = Layout;


export default function Template(props) {

  const [menuSelected, setMenuSelected] = useState('0')

  const menuList = [
    { icon: <UserOutlined />, name: 'Início', link: '/home' },
    { icon: <UserOutlined />, name: 'Aprendizes', link: '/apprentices' },
    { icon: <CalendarOutlined />, name: 'Agenda', link: '/schedule' },
    { icon: <SettingOutlined />, name: 'Configuração', link: '/settings' },
  ]

  const handleClick = e => {
    setMenuSelected(e.key)
  }

  return (
    <Layout >
      <Menu mode="horizontal" onClick={handleClick} selectedKeys={[menuSelected]}>
        <div className="logo">
          <img src={logo} alt={`logo`} />
        </div>
        {menuList.map((menu, index) =>
          <Menu.Item key={index} icon={menu.icon}>
            <Link to={menu.link} className="menu-link">
              {menu.name}
            </Link>
          </Menu.Item>
        )}
      </Menu>
      <Content>
        <div className="site-layout-content">
          <Router {...props} />
        </div>
      </Content>
    </Layout>
  )
}
