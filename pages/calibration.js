import CalibrationLayout from '../components/calibration/layout'
import TabbedContent from '../components/calibration/tabbed_content'

let footer = <span>Ivan</span>;  

export default () => (
  
  <CalibrationLayout footer={footer}>
    <TabbedContent></TabbedContent>
  </CalibrationLayout>
)


