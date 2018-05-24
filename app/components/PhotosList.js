import React from 'react';
import classNames from 'classnames';

import styles from './PhotoList.css';

export default function PhotosList(props) {
  const { photos } = props;
  const highlight = new Set(props.highlight);
  const onClick = props.onClick
    ? index => props.onClick(index)
    : () => {};
  return (
    <ul
      className={styles.container}
    >
      {photos.map((photo, index) => (
        <li key={index} onClick={onClick(index)}>
          <img
            className={classNames(styles.image, highlight.has(index) && styles.selected)}
            src={photo}
            alt="Captured"
          />
        </li>
      ))}
    </ul>
  );
}
