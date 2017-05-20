import extend from 'lodash/extend';
import clone from 'lodash/clone';
import omit from 'lodash/omit';

export default function(state = {}, action) {
  switch (action.type) {
    case 'ADD_USER':
      return extend(clone(state), {
        [action.payload.uid]: {
          uid: action.payload.uid,
          displayName: action.payload.displayName,
          email: action.payload.email,
          photoURL: action.payload.photoURL
        }
      });

    case 'REMOVE_USER':
      return omit(clone(state), action.payload.uid);

    default:
      return state;
  };
};
