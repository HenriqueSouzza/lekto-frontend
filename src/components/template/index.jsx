import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import Router from '../../pages/router';
import 'antd/dist/antd.less';
import logo from '../../assets/images/logo_purple.png';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import IconCustom from '../../components/icon/index';
import './index.css';

const { Content } = Layout;

export default function Template(props) {

  const { logout } = useAuth0();

  const [menuSelected, setMenuSelected] = useState('0')

  const menuList = [
    { icon: <IconCustom icon="icon-menu---home" />, name: 'Início', link: '/home' },
    { icon: <IconCustom icon="icon-menu---aprendizes" />, name: 'Aprendizes', link: '/apprentices' },
    { icon: <IconCustom icon="icon-menu---agenda" />, name: 'Agenda', link: '/schedule' },
    { icon: <IconCustom icon="icon-menu---settings" />, name: 'Configuração', link: '/settings' },
  ]

  const handleClick = e => {
    setMenuSelected(e.key)
  }

  return (
    <Layout >
      <Menu mode="horizontal" onClick={handleClick} selectedKeys={[menuSelected]}>
        {menuList.map((menu, index) =>
          <Menu.Item key={index} icon={menu.icon}>
            <Link to={menu.link} className="menu-link">
              {menu.name}
            </Link>
          </Menu.Item>
        )}
        <div className="logo">
          <img src={logo} alt={`logo`} />
        </div>
        <Menu.Item icon={<LogoutOutlined />}>
          <Link to={`#`} onClick={() => logout()} className="menu-link">
            {`Sair`}
          </Link>
        </Menu.Item>
      </Menu>
      <Content>
        <div className="site-layout-content">
          <Router {...props} />
        </div>
      </Content>
    </Layout>
  )
}
