import {fork} from 'redux-saga/effects';

import auth from './auth';
import messages from './messages';
import users from './users';

export default function* () {
  yield[fork(messages),
    fork(auth),
    fork(users)];
};
