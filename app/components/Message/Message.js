import React from 'react';

import prettydate from 'pretty-date';

import styles from './Message.css';

export default function({
  author,
  currentUsersMesssage,
  content,
  timestamp
}) {
  function messageCSSClass() {
    var cssClass = styles['chatmessage'],
      currentUserClass = styles['currentuser'];

    return (currentUsersMesssage) ? [cssClass, currentUserClass].join(' ') : cssClass;
  };

  return (
    <div className={messageCSSClass()}>
      <div className={styles['chatmessage__top']}>
        <div className={styles['author']}>
          <span className={styles['author__name']}>
            {
              author.displayName
            }
          </span>

          <span className={styles['author__posttime']}>
            {
              prettydate.format(new Date(timestamp))
            }
          </span>
        </div>
      </div>
      <div className={styles['chatmessage__bottom']}>
        <div className={styles['message']}>
          <p className={styles['message__content']}>
            {
              content
            }
          </p>
        </div>
      </div>
    </div>
  );
};
