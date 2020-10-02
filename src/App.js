import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/main';
import { HomePage, ApplicantsPage, ApplicantPage } from './pages';
export default () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/applicants">
          <ApplicantsPage />
        </Route>
        <Route exact path="/applicants/:id">
          <ApplicantPage />
        </Route>
      </Switch>
    </Layout>
  </Router>
);
