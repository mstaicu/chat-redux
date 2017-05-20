import {fork} from 'redux-saga/effects';

import {messagesDatabase} from '../config/firebase';

import {addMessage, removeMessage} from '../actions/messages';

import synchronizeFirebase from './utilities';

function* listenForSyncMessages() {
  yield fork(synchronizeFirebase, messagesDatabase, {
    'child_added': addMessage,
    'child_removed': removeMessage
  });
};

export default function* () {
  yield fork(listenForSyncMessages);
};
