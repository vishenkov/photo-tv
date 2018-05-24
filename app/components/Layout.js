import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.css';

export default function Layout(props) {
  return (
    <div className={styles.root}>
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
