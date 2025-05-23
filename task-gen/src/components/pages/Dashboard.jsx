import React from 'react'; 
import { BarsOutlined, ScheduleOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { Row, Col, Card } from 'antd';

function Dashboard() {
  return (
    <>
      <Row gutter={16} className='row-card'>
        <Col span={7}>
          <Card title={<><BarsOutlined className='icon-card' />Current Tasks</> }>Nội dung 1</Card>
        </Col>
        <Col span={7}>
            <Card title={<><ScheduleOutlined className='icon-card' />Upcoming Tasks</>}>Nội dung 2</Card>
        </Col>
        <Col span={7}>
          <Card title={<><CheckSquareOutlined className='icon-card' />Completed Tasks</>}>Nội dung 3</Card>
        </Col>
      </Row>
      <Row gutter={16} className='row-card' style={{ marginTop: 24 }}>
        <Col span={11}>
          <Card title="Cột 4">Nội dung 4</Card>
        </Col>
        <Col span={11}>
          <Card title="Cột 5">Nội dung 5</Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;