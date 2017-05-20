import {eventChannel} from 'redux-saga';

import {put, fork, call, take} from 'redux-saga/effects';

const EVENT_TYPES = ['child_added', 'child_removed'];

function getEventChannel() {
  var eventChannelObj = {};

  var listener = eventChannel(function subscriber(emit) {
    eventChannelObj.handler = function(data) {
      emit({data});
    };

    return function() {};
  });

  listener.handler = eventChannelObj.handler;

  return listener;
};

function* runSync(firebaseDatabaseRef, eventType, creator) {
  const eventChannel = getEventChannel();

  yield call([
    firebaseDatabaseRef, firebaseDatabaseRef.on
  ], eventType, eventChannel.handler);

  try {
    while (true) {
      const {data} = yield take(eventChannel);
      yield put(creator(data));
    }
  } catch (error) {
    console.log(error);
  }
};

export default function* (firebaseDatabaseRef, mapEventToAction = {}) {
  for (let type of EVENT_TYPES) {
    const action = mapEventToAction[type];
    if (typeof action === 'function') {
      yield fork(runSync, firebaseDatabaseRef, type, action);
    }
  }
};
