import React, { useState } from 'react';
import './App.css';
import { Select } from 'antd';
import { Typography} from 'antd';
import { Row, Col} from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
const { TextArea } = Input;

const { Text} = Typography;
const { Option } = Select;

function Page() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);

  return (
    <div className="container">
    <Row gutter={[8,8]}>
      <Col span={5}>
    <Text strong className="platform">Platform: </Text>
    </Col>
    <Col span={5}>
      <Select defaultValue="Windows" style={{ width: 180 }}>
        <Option value="Windows">Windows</Option>
        <Option value="osx" disabled>osx</Option>
        <Option value="Andriod" disabled>Andriod</Option>
      </Select>
      </Col>
    </Row>
    <Row gutter={[8,8]}>
      <Col span={5}>
      <Text strong className="version">Version:</Text>
      </Col>
      <Col span={5}>
      <Input placeholder="Please input ..." style={{ width: 180 }}></Input>
      </Col>
    </Row>
    <Row gutter={[8,8]}>
      <Col span={5}>
    <Text strong className="platform">Sub-Platform: </Text>
    </Col>
    <Col span={5}>
      <Select defaultValue="x86" style={{ width: 180 }}>
        <Option value="x86">X-86</Option>
        <Option value="x64">X-64</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      </Col>
    </Row>

    <Row gutter={[8,8]}>
      <Col span={5}>
    <Text strong className="platform">StackTrace: </Text>
    </Col>
    <Col span={5}>
        <TextArea
            rows={4}
            className="textarea"
        />
      </Col>
    </Row>
    <Button type="primary" style={{margin: 80}}>Primary Button</Button>
  </div>
  );
}





export default Page;