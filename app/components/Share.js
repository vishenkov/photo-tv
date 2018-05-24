import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';


import PhotoList from './PhotosList';
import Facebook from './Facebook';
import HorizontalStepper from './HorizontalStepper';
import Layout from './Layout';
// import styles from './Country.css';
import facebookIcon from '../static/icons/facebook.svg';
import instagramIcon from '../static/icons/instagram.svg';
import tinderIcon from '../static/icons/tinder.svg';
import snapchatIcon from '../static/icons/snapchat.svg';
// console.log(facebookIcon);

export default class Share extends Component {
  state = {
    facebookOpen: false,
    instagramOpen: false,
    tinderOpen: false,
    snappchatOpen: false,
  };

  componentWillMount() {
    // this.props.getCountries();
  }

  handleOpen = social => event => {
    event.preventDefault();
    console.log(social);
    this.setState({
      facebookOpen: social === 'facebook',
      instagramOpen: social === 'instagram',
      tinderOpen: social === 'tinder',
      snappchatOpen: social === 'snappchat',
    });
  };

  handleClose = () => {
    this.setState({
      facebookOpen: false,
      instagramOpen: false,
      tinderOpen: false,
      snappchatOpen: false,
    });
  };

  handlePhotoClick = index => event => {
    console.log(index);
    this.props.togglePhotoShare(index);
  };

  render() {
    const { photos, share } = this.props;

    return (
      <Layout>
        <HorizontalStepper activeStep={3} />
        <div style={{ marginBottom: '25px' }}>
          <Button aria-label="facebook" onClick={(event) => this.handleOpen('facebook')(event)}>
            <img src={facebookIcon} alt="facebook" />
          </Button>
          <Button disabled aria-label="instagram" onClick={(event) => this.handleOpen('instagram')(event)}>
            <img src={instagramIcon} alt="instagram" />
          </Button>
          <Button disabled aria-label="tinder" onClick={(event) => this.handleOpen('tinder')(event)}>
            <img style={{ width: '50px' }} src={tinderIcon} alt="tinder" />
          </Button>
          <Button disabled aria-label="snapchat" onClick={(event) => this.handleOpen('snapchat')(event)}>
            <img src={snapchatIcon} alt="snapchat" />
          </Button>
          {/* <Button component={Link} to="/success">
            Next
          </Button> */}
          <Facebook open={this.state.facebookOpen} onClose={this.handleClose} />
        </div>
        <Button variant="raised" color="secondary" component={Link} to="/country">
          Start Over
        </Button>
        <PhotoList
          photos={photos}
          highlight={share}
          onClick={this.handlePhotoClick}
        />
      </Layout>
    );
  }
}
