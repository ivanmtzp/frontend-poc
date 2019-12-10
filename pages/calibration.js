import CalibrationLayout from '../components/calibration_layout'
import { Row, Col, Tabs, Card } from 'antd';
const { TabPane } = Tabs;


let footer = <span>Ivan</span>;  

export default () => (
  
  <CalibrationLayout footer={footer}>
    <TabsCard></TabsCard>    
  </CalibrationLayout>
)


class SettingsTab extends React.Component {

  render() {
    return (
      <Row gutter={16}>
        <Col span={6}>
          <Card size="small" title="Calibration">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" title="Skew">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card size="small" title="Extrapolation">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        
      </Row>

      
      

    )

  }
}



class ResultsTab extends React.Component {

  render() {
    return (
      <Card size="small" title="Metrics" style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
      

    )

  }
}


class TabsCard extends React.Component {
  state = {
    key: 'tabSettings',    
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    const tabList = [
      {
        key: 'tabSettings',
        tab: 'Settings',
      },
      {
        key: 'tabResults',
        tab: 'Results',
      },
    ];
    
    const contentList = {
      tabSettings: <SettingsTab></SettingsTab>,
      tabResults: <ResultsTab></ResultsTab>,
    };
    
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          title="BBVA"
          extra={<a href="#">More</a>}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[this.state.key]}
        </Card>               
          
      </div>
    );
  }
}

