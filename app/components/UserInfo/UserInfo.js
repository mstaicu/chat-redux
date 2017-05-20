import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  auth
} from '../../config/firebase';

import styles from './UserInfo.css';

function UserInfo({
  user,
  callback
}) {
  return (
    <div className={styles['userinfo']}>
      <div className={styles['userinfo__left']}>
        <img src={user.photoURL}
          alt={user.displayName}
          className={styles['userinfo__avatar']}
        />

        <span className={styles['userinfo__name']}>
          {
            user.displayName
          }
        </span>
      </div>
      <div className={styles['userinfo__right']}>
        <div className={styles['signout']}>
          <button className={styles['signout__button']}
            onClick={callback}>
            Leave ;(
          </button>
        </div>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired,
  })
};

export default UserInfo;
