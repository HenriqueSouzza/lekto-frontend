import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import Router from '../../pages/router';
import 'antd/dist/antd.less';
import './index.css';
import logo from '../../assets/images/logo_purple.png';
import { Link } from 'react-router-dom';

import IconCustom from '../../components/icon/index';

const { Content } = Layout;


export default function Template(props) {

  const [menuSelected, setMenuSelected] = useState('0')

  const menuList = [
    { icon: <IconCustom icon="icon-menu---home"/>, name: 'Início', link: '/home' },
    { icon: <IconCustom icon="icon-menu---aprendizes"/>, name: 'Aprendizes', link: '/apprentices' },
    { icon: <IconCustom icon="icon-menu---agenda"/>, name: 'Agenda', link: '/schedule' },
    { icon: <IconCustom icon="icon-menu---settings"/>, name: 'Configuração', link: '/settings' },
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
