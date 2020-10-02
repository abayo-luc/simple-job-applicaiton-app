import React, { useState, useEffect } from 'react';
import { Descriptions, Select, Skeleton, Result, Button } from 'antd';
import { useParams, useHistory } from 'react-router-dom';
import Axios from 'axios';
const { Option } = Select;
const options = ['pending', 'invited', 'passed', 'failed'];

const { REACT_APP_API_BASE_URL } = process.env;

export const ApplicantPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [updating, setUpdating] = useState(false);
  const [applicantData, setApplicantData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const updateState = (status) => {
    setUpdating(true);
    return Axios.put(`${REACT_APP_API_BASE_URL}/applicants/${id}`, {
      status,
    })
      .then((res) => {
        const { data } = res.data;
        setApplicantData((state) => ({ ...state, ...data }));
      })
      .catch((err) => {
        const { message } =
          err.response?.data || 'Satus change failed, try again!';
        alert(message);
      })
      .finally(() => {
        setUpdating(false);
      });
  };

  const fetchData = (applicantId) => {
    setLoading(true);
    return Axios.get(`${REACT_APP_API_BASE_URL}/applicants/${applicantId}`)
      .then((res) => {
        const { data } = res.data;
        setApplicantData(data);
      })
      .catch((err) => {
        setErrors(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  if (errors) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => history.push('/')}>
            Back Home
          </Button>
        }
      />
    );
  }
  return (
    <div className="container">
      {isLoading ? (
        <Skeleton />
      ) : (
        <Descriptions title="Applicant Info" layout="horizontal" loading>
          <Descriptions.Item label="Names">
            {applicantData.firstName} {applicantData.lastName}
          </Descriptions.Item>
          <Descriptions.Item label="ID">#{applicantData.id}</Descriptions.Item>
          <Descriptions.Item label="Email">
            {applicantData.email}
          </Descriptions.Item>
          <Descriptions.Item label="Comment" span={2}>
            {applicantData.comment}
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number">
            {applicantData.phoneNumber}
          </Descriptions.Item>
          <Descriptions.Item label="Application status">
            <Select
              defaultValue={applicantData.status}
              style={{ width: 120 }}
              onChange={updateState}
              loading={updating}
            >
              {options.map((option) => (
                <Option value={option} key={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </Descriptions.Item>
          <Descriptions.Item label="Comment">
            {applicantData.comment}
          </Descriptions.Item>
        </Descriptions>
      )}
      <div className="cv-container">
        <span className="cv-title">Applicant CV</span>
        <div>
          <span>url:</span>
          <a href={applicantData.cv}>{applicantData.cv}</a>
        </div>
      </div>
    </div>
  );
};
