import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';


import HorizontalStepper from './HorizontalStepper';
import Layout from './Layout';
import styles from './Agreement.css';

const uiClasses = theme => ({
  root: theme.mixins.gutters({
    width: '70%',
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    overflowY: 'scroll',
  }),
  button: {
    marginRight: theme.spacing.unit * 3,
  }
});

class Agreement extends Component {
  handleAgreed = event => {
    event.preventDefault();
    this.props.setAgreement(true);
  }

  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <HorizontalStepper activeStep={1} />
        <div className={styles.container}>
          <Paper className={classes.root} elevation={4}>
            <Typography variant="headline" gutterBottom>
              Acceptable Use
            </Typography>
            <Typography gutterBottom>
            Short version: GitHub hosts a wide variety of collaborative projects from all over the world, and that collaboration only works when our users are able to work together in good faith. While using the service, you must follow this Acceptable Use Policy, which includes some restrictions on content you can post, conduct on the service, and other limitations. In short, be excellent to each other.
            </Typography>
            <Typography variant="title" gutterBottom>
              1. Compliance with Laws and Regulations
            </Typography>
            <Typography gutterBottom>
            Your use of the Website and Service must not violate any applicable laws, including copyright or trademark laws, export control laws, or other laws in your jurisdiction. You are responsible for making sure that your use of the Service is in compliance with laws and any applicable regulations.
            </Typography>
            <Typography variant="title" gutterBottom>
              2. Content Restrictions
            </Typography>
            <Typography gutterBottom>
            Misuse of GitHub Users' Personal Information is prohibited. Any person, entity, or service collecting data from GitHub must comply with the GitHub Privacy Statement, particularly in regards to the collection of our Users' Personal Information (as defined in the GitHub Privacy Statement). If you collect any GitHub User's Personal Information from GitHub, you agree that you will only use the Personal Information you gather for the purpose for which our User has authorized it. You agree that you will reasonably secure any Personal Information you have gathered from GitHub, and you will respond promptly to complaints, removal requests, and "do not contact" requests from GitHub or GitHub Users.
            </Typography>
          </Paper>
          <div>
            <Button variant="raised" color="secondary" className={classes.button} component={Link} to="/country">
              Start Over
            </Button>
            <Button variant="raised" color="primary" component={Link} to="/photo">
              Agree
            </Button>
          </div>
        </div>
        {/* {this.props.agreement &&
          <Redirect to="/photo" />} */}
      </Layout>
    );
  }
}

export default withStyles(uiClasses)(Agreement);
