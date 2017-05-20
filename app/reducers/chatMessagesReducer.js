import extend from 'lodash/extend';
import clone from 'lodash/clone';
import omit from 'lodash/omit';

export default function(state = {}, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return extend(clone(state), {
        [action.payload.key]: {
          content: action.payload.content,
          uid: action.payload.uid,
          timestamp: action.payload.timestamp
        }
      });

    case 'REMOVE_MESSAGE':
      return omit(clone(state), action.payload.key);

    default:
      return state;
  };
};
