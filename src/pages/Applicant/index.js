import React from 'react';
import { Descriptions, Tag, Select } from 'antd';
const { Option } = Select;
const options = ['pending', 'invited', 'passed', 'failed'];

export const ApplicantPage = () => (
  <div className="container">
    <Descriptions title="Applicant Info" layout="horizontal">
      <Descriptions.Item label="Names">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="#ID">1810000000</Descriptions.Item>
      <Descriptions.Item label="Email">Hangzhou, Zhejiang</Descriptions.Item>
      <Descriptions.Item label="Address" span={2}>
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
      <Descriptions.Item label="Phone Number">empty</Descriptions.Item>
      <Descriptions.Item label="Application status">
        <Select defaultValue="pending" style={{ width: 120 }}>
          {options.map((option) => (
            <Option value={option} key={option}>
              {option}
            </Option>
          ))}
        </Select>
      </Descriptions.Item>
    </Descriptions>
  </div>
);
