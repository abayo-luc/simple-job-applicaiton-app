import React from 'react';
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status) => {
      const color = 'geekblue';
      return <Tag color={color}>{status.toUpperCase()}</Tag>;
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>View {record.name}</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    firstName: 'John Brown',
    lastName: 'Aba',
    email: 'New York No. 1 Lake Park',
    status: 'nice',
  },
  {
    key: '2',
    firstName: 'Jim Green',
    lastName: 'Aba',
    email: 'London No. 1 Lake Park',
    status: 'loser',
  },
  {
    key: '3',
    firstName: 'Joe Black',
    lastName: 'Aba',
    email: 'Sidney No. 1 Lake Park',
    status: 'cool',
  },
];

export default () => (
  <div className="container">
    <Table columns={columns} dataSource={data} />
  </div>
);
