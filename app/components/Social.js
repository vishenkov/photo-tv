import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  button: {
    display: 'block',
    width: '100%',
    margin: theme.spacing.unit,
  },
});

class Social extends Component {
  handleClose = () => {
    this.props.handleClose();
  };

  render() {
    const {
      social, handleLogin, handleSignup, handleGuest, ...other
    } = this.props;
    const { classes } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Share with {social}</DialogTitle>
        <DialogContent>
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            // onClick={handleLogin}
            component={Link}
            to="/success"
          >
            Log in with {social}
          </Button>
          <Divider />
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            // onClick={handleSignup}
            component={Link}
            to="/success"
          >
            Sign up new {social} account
          </Button>
          <Divider />
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            // onClick={handleGuest}
            component={Link}
            to="/success"
          >
            Share with Guest Account
          </Button>
        </DialogContent>
      </Dialog>
    );
  }
}


export default withStyles(styles)(Social);
