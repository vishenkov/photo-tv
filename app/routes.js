/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import CountryPage from './containers/CountryPage';
import AgreementPage from './containers/AgreementPage';
import PhotoPage from './containers/PhotoPage';
import SharePage from './containers/SharePage';
import SuccessPage from './containers/SuccessPage';

export default () => (
  <App>
    <Switch>
      <Route path="/success" component={SuccessPage} />
      <Route path="/share" component={SharePage} />
      <Route path="/agreement" component={AgreementPage} />
      <Route path="/photo" component={PhotoPage} />
      <Route path="/" component={CountryPage} />
    </Switch>
  </App>
);
