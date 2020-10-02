/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
const { REACT_APP_API_BASE_URL } = process.env;
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
  const history = useHistory();
  const [errors, setErrors] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    return Axios.post(`${REACT_APP_API_BASE_URL}/applicants`, values)
      .then((res) => {
        const { data } = res.data;
        history.push(`/applicants/${data.id}`);
      })
      .catch((err) => {
        const { message, errors } = err.response?.data || 'Validation error';
        console.log(errors);
        setErrors(errors || [{ message, path: 'general' }]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="applicant-form-container">
      {errors && (
        <div className="error-container">
          Errors:
          {errors.map((err) => (
            <span key={err.path}>{err.message}</span>
          ))}
        </div>
      )}
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
          errors="hello"
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
          rules={[{ required: true }]}
        >
          <Input placeholder="0789277275" />
        </Form.Item>
        <Form.Item name={['cv']} label="CV" rules={[{ required: true }]}>
          <Input placeholder="https://bk-challenge-api.herokuapp.com/api" />
        </Form.Item>
        <Form.Item name={['comment']} label="Leave a Comment">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
          <Button type="primary" block htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
