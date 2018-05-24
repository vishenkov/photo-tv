import React, { Component } from 'react';
import Button from 'material-ui/Button';
import CameraIcon from 'material-ui-icons/PhotoCamera';
import styles from './TakePhoto.css';

export default class TakePhoto extends Component {
  componentDidMount() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          this.video.src = window.URL.createObjectURL(stream);
          this.video.play();
          return stream;
        })
        .catch((err) =>
          console.error(err));
    }
  }

  handlePhoto = event => {
    const context = this.canvas.getContext('2d');
    event.preventDefault();
    this.canvas.width = 640;
    this.canvas.height = 480;
    context.drawImage(this.video, 0, 0, 640, 480);

    const data = this.canvas.toDataURL();
    // console.log(data);
    this.props.handleTakePhoto(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <video
          className={styles.video}
          autoPlay
          ref={video => { this.video = video; }}
        >
          <track kind="captions" label="Camera" />
        </video>
        <canvas
          style={{ display: 'none' }}
          ref={canvas => { this.canvas = canvas; }}
        />
        <div className={styles.photoButton}>
          <Button variant="fab" color="primary" onClick={this.handlePhoto}>
            <CameraIcon />
          </Button>
        </div>
      </div>);
  }
}
