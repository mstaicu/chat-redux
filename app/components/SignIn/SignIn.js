import React from 'react';

import styles from './SignIn.css';

export default function({callback}) {
  return (
    <div className={styles['signin']}>
      <button className={styles['signin__button']}
        onClick={callback}>
        Sign In
      </button>
    </div>
  );
};
