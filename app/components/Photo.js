import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import ShareIcon from 'material-ui-icons/Share';

import TakePhoto from './TakePhoto';
import PhotoList from './PhotosList';

import HorizontalStepper from './HorizontalStepper';
import Layout from './Layout';
import styles from './Photo.css';

const uiClasses = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class Photo extends Component {
  render() {
    const { photos, addPhoto, classes } = this.props;
    return (
      <Layout>
        <HorizontalStepper activeStep={2} />
        <TakePhoto
          handleTakePhoto={addPhoto}
        />
        <Button variant="raised" color="secondary" className={classes.button} component={Link} to="/country">
          Start Over
        </Button>
        <Button className={classes.button} variant="raised" component={Link} to="/share">
          Share
          <ShareIcon className={classes.rightIcon} />
        </Button>
        <div className={styles.photoList}>
          <PhotoList photos={photos} />
        </div>
      </Layout>
    );
  }
}

export default withStyles(uiClasses)(Photo);
