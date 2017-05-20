import React from 'react';

import Message from '../Message/Message';

import styles from './Messages.css';

export default function({
  currentUser,
  chatMessages,
  chatUsers,
  deleteMessage
}) {
  function isCurrentUsersMesssage(message) {
    return currentUser && currentUser.uid === message.uid;
  };

  function renderMessage(messageKey) {
    var chatMessage = chatMessages[messageKey],
      messageAuthor = chatUsers[chatMessage.uid];

    return chatMessage && messageAuthor && (
      <Message key={messageKey}
        {...chatMessage}
        author={messageAuthor}
        currentUsersMesssage={isCurrentUsersMesssage(chatMessage)}
      />
    );
  }

  return (
    <div className={styles['chatmessages']}>
      {
        Object.keys(chatMessages).map(renderMessage)
      }
    </div>
  );
};
