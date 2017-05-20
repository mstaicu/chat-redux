import React from 'react';

import SignIn from '../SignIn/SignIn';
import UserInfo from '../UserInfo/UserInfo';
import Loading from '../Loading/Loading';

import MessagesContainer from '../../containers/MessagesContainer';
import ChatInputContainer from '../../containers/ChatInputContainer';

import styles from './App.css';

export default function({
  currentUser,
  pageLoading,
  signIn,
  signOut,
  userStatus
}) {
  function getUserAuthControls() {
    return getSignInButton() || getUserInfoElement();
  };

  function getSignInButton() {
    return userSignedOut && <SignIn callback={signIn}/>;
  };

  function getUserInfoElement() {
    return userSignedIn && <UserInfo callback={signOut} user={currentUser}/>;
  };

  function getChatApp() {
    return (
      <div className={styles['chat']}>
        <UserInfo callback={signOut} user={currentUser} />
        <MessagesContainer/>
        <ChatInputContainer/>
      </div>
    );
  };

  function getChatAuth() {
    return (
      <div className={styles['chat__auth']}>
        <SignIn callback={signIn}/>
      </div>
    );
  };

  return (userStatus.userIsSignedOut)
    ? getChatAuth()
    : getChatApp();
};
