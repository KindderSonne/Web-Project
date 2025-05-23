//import { useState } from 'react';
import { Layout } from 'antd';
import MenuList from './components/ui/Menu.jsx';
import Logo from './components/ui/logo.jsx';
import Dashboard from './components/pages/Dashboard.jsx';

const {Sider, Content} = Layout;
function App() {
  return (
    <Layout>
      <Sider className='sidebar'>
        <Logo />
        <MenuList />
      </Sider>
      <Content>
        <Dashboard />
      </Content>
    </Layout>
  )
}

export default App
