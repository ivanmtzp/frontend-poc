import { Layout as AntLayout, Menu, Icon } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const { Header, Content, Footer, Sider } = AntLayout;

const StyledLink = styled.a`
  color: white;  
`

class Layout extends React.Component {
  state = {
    collapsed: false,    
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <AntLayout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>
              <Link href='/' passHref>
              <StyledLink>Calibrations Blotter</StyledLink>
              </Link>              
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Control Panel</span>
            </Menu.Item>      
            <Menu.Item key="3">
              <Icon type="file" />
              <span>Market Data Viewer</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <AntLayout>
          {this.props.header &&  
            <Header style={{ background: '#fff', padding: 0 }} />
          }
          
          <Content style={{ margin: '0 16px' }}>
            {this.props.children}          
          </Content>

          {this.props.footer && 
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          }
        </AntLayout>
      </AntLayout>
    );
  }
}

export default Layout