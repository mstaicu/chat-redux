import React from 'react';

import styles from './Loading.css';

export default function({
  loadingPage
}) {
  function getLoadingVisbility() {
    var elementClass = styles['loading'],
      visibileClass = styles['visible'];

    return (loadingPage) ? `${elementClass} ${visibileClass}` : elementClass;
  }

  return (
    <div className={getLoadingVisbility()}></div>
  );
};
