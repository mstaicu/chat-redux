import {fork} from 'redux-saga/effects';

import {usersDatabase} from '../config/firebase';

import {addUser, removeUser} from '../actions/users';

import synchronizeFirebase from './utilities';

function* listenForSyncMessages() {
  yield fork(synchronizeFirebase, usersDatabase, {
    'child_added': addUser,
    'child_removed': removeUser
  });
};

export default function* () {
  yield fork(listenForSyncMessages);
};
