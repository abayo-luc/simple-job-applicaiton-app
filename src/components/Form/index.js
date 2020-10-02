import React, { useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export default () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="applicant-form-container">
      <Form
        {...layout}
        // layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['firstName']}
          label="First Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="John" />
        </Form.Item>
        <Form.Item
          name={['lastName']}
          label="Last Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Doe" />
        </Form.Item>
        <Form.Item
          name={['email']}
          label="Email"
          rules={[{ type: 'email', required: true }]}
        >
          <Input placeholder="example@gmail.com" />
        </Form.Item>
        <Form.Item
          name={['phoneNumber']}
          label="Phone Number"
          rules={[{ type: 'phone', required: true }]}
        >
          <Input placeholder="0789277275" />
        </Form.Item>
        <Form.Item
          name={['cv']}
          label="CV"
          rules={[{ type: 'link', required: true }]}
        >
          <Input placeholder="https://bk-challenge-api.herokuapp.com/api" />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Note">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
          <Button type="primary" block htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
