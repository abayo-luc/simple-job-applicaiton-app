import React from 'react';
import { Table, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
import { getStatusColor } from '../helpers';
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
      const color = getStatusColor(status);
      return <Tag color={color}>{status.toUpperCase()}</Tag>;
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link to={`/applicants/${record.id}`}>View</Link>
      </Space>
    ),
  },
];

export default ({ data, loading }) => (
  <div className="container">
    <Table columns={columns} dataSource={data} loading={loading} />
  </div>
);
