import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

class CalibrationLayout extends React.Component {
    
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>        
          {this.props.header &&  
            <Header style={{ background: '#fff', padding: 0 }}>
              {this.props.header}
            </Header>
          }          
          <Content style={{ margin: '0 16px' }}>
            {this.props.children}          
          </Content>
          {this.props.footer &&
            <Footer style={{ textAlign: 'center' }}>
              {this.props.footer}
            </Footer>                  
          }
      </Layout>
    );
  }
}

export default CalibrationLayout