import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';

import HorizontalStepper from './HorizontalStepper';
import Layout from './Layout';

import styles from './Success.css';

export default class Success extends Component {
  render() {
    return (
      <Layout>
        <HorizontalStepper activeStep={4} />
        <div className={styles.container}>
          <Typography variant="display4">
            Thank You!
          </Typography>
          <Button variant="raised" color="secondary"component={Link} to="/country">
            Start Over
          </Button>
        </div>
      </Layout>
    );
  }
}
