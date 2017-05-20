import {put, take, fork, call} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

import {auth, usersDatabase} from '../config/firebase';

import {signIn, signOut} from '../actions/auth';

function createAuthEventChannel() {
  return eventChannel(function(emit) {
    return auth.onAuthStateChanged(function(user) {
      /**
       * Emitting null here breaks time travel
       */
      emit({user});
    });
  });
};

function* listenForAuthChanges() {
  var authChannel = yield call(createAuthEventChannel);

  while (true) {
    var {user} = yield take(authChannel);

    if (user) {
      yield put(signIn(user));

      var {uid, displayName, email, photoURL} = user;

      usersDatabase.child(user.uid).set({uid, displayName, email, photoURL});
    } else {
      yield put(signOut());
    };
  }
};

export default function* () {
  yield[fork(listenForAuthChanges)];
};
