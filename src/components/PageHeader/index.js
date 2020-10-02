import React from 'react';
import { PageHeader, Button } from 'antd';
import { useHistory } from 'react-router-dom';
export default () => {
  const history = useHistory();
  return (
    <div className="app-header site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => {
          history.goBack();
        }}
        title="SJA:"
        subTitle="Simple Job Application"
        extra={[
          <Button key="2" onClick={() => history.push('/')}>
            Apply
          </Button>,
          <Button key="3" onClick={() => history.push('/applicants')}>
            View Applicants
          </Button>,
        ]}
      />
    </div>
  );
};
