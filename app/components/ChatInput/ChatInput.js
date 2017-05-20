import React from 'react';

import styles from './ChatInput.css';

export default function({
  handleChange,
  handleKeyDown,
  handleSubmit,
  currentUser,
  chatInput
}) {
  return (
    <div className={styles['chatinput']}>
      <form onSubmit={function(event) {
        handleSubmit(event, chatInput, currentUser.uid);
      }}>
        <div className={styles['chatinput__top']}>
          <textarea placeholder="Type your messsage"
            className={styles['chatinput__textarea']}
            onChange={handleChange}
            value={chatInput}
            rows="5">
          </textarea>
        </div>

        <div className={styles['chatinput__bottom']}>
          <button className={styles['chatinput__submit']}>Send</button>
        </div>
      </form>
    </div>
  );
};
