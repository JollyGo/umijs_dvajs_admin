import { Component } from 'react';
import PropTypes from 'prop-types'
import { Layout, Menu, Icon} from 'antd';
import { connect } from 'dva'
import { Loader } from '../components/Loader'
import Link from 'umi/link'

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

function mapStateToProps(state){
    return{
      Loading: state.loading.effects['app/query']
    }
  }

@connect(mapStateToProps)
class BasicLayout extends Component {
render() {
    // const {Loading}=this.props
  return (
    <Layout>
        
      
      <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
      <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}} src='../assets/GitHub.svg'/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Link to='/home/user'>
                    <Icon type='user'/>
                    <span>User</span>
                </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
            >
               <Menu.Item key="2">分析页</Menu.Item>
               <Menu.Item key="3">监控页</Menu.Item>
               <Menu.Item key="4">工作台</Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
                <Link to='/home'>
                    <Icon type='home'/>
                    <span>Home</span>
                </Link>
            </Menu.Item>
          </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
            Header</Header>
        <Content style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
            {this.props.children}</Content>
        <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}
}

// BasicLayout.propTypes = {
//     loading: PropTypes.object,
//   }
  
export default BasicLayout;