import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import Table from '../../components/Table';
const { REACT_APP_API_BASE_URL } = process.env;

export const ApplicantsPage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState();
  const [applicantsData, setApplicantsData] = useState([]);
  const [failed, setFailed] = useState(null);
  const fetchData = () => {
    setLoading(true);
    return Axios.get(`${REACT_APP_API_BASE_URL}/applicants`)
      .then((res) => {
        const {
          data: { rows },
        } = res.data;
        setApplicantsData(rows);
      })
      .catch((err) => {
        setFailed(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (failed) {
    return (
      <Result
        status="500"
        title="5000"
        subTitle="Sorry, something went wrong, try again!"
        extra={
          <Button type="primary" onClick={() => history.push('/')}>
            Back Home
          </Button>
        }
      />
    );
  }
  return <Table data={applicantsData} loading={loading} />;
};
