import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, DashboardOutlined, UserOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons';

const items = [
  { key: 'Home', icon: <HomeOutlined />, label: 'Home' },
  { key: 'Dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
  { key: 'PersonalTasks', icon: <UserOutlined />, label: 'Personal Tasks' },
  { key: 'Projects', icon: <TeamOutlined />, label: 'Projects' },
  { key: 'Settings', icon: <SettingOutlined />, label: 'Settings' },
];

const MenuList = () => {
  return <Menu className='menu' items={items} />;
};

export default MenuList;