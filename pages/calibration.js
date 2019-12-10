import CalibrationLayout from '../components/calibration/layout'
import { Row, Col, Tabs, Card } from 'antd';
const { TabPane } = Tabs;


let footer = <span>Ivan</span>;  

export default () => (
  
  <CalibrationLayout footer={footer}>
    <TabsCard></TabsCard>    
  </CalibrationLayout>
)


class GeneralSettingsTab extends React.Component {

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

class DividendSettingsTab extends React.Component {

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

class FilterSettingsTab extends React.Component {

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
    key: 'tabResults',    
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    const tabList = [
      {
        key: 'tabResults',
        tab: 'Results',
      },
      {
        key: 'tabGeneralSettings',
        tab: 'General Settings',
      },
      {
        key: 'tabDividendSettings',
        tab: 'Dividend Settings',
      },
      {
        key: 'tabFilterSettings',
        tab: 'Filter Settings',
      },
            
    ];
    
    const contentList = {      
      tabResults: <ResultsTab></ResultsTab>,
      tabGeneralSettings: <GeneralSettingsTab></GeneralSettingsTab>,
      tabDividendSettings: <DividendSettingsTab></DividendSettingsTab>,
      tabFilterSettings: <FilterSettingsTab></FilterSettingsTab>,
    };
    
    return (
      <div>
        <Card
          style={{ width: '100%', height: '100%' }}
          title='BBVA'
          size='small'
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

