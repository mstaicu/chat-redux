var defaultState = {
  email: '',
  displayName: '',
  photoURL: '',
  uid: ''
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'SIGN_IN':
      var {email, displayName, photoURL, uid} = action.payload;

      return {email, displayName, photoURL, uid};

    case 'SIGN_OUT':
      return {email: null, displayName: null, photoURL: null, uid: null};

    default:
      return state;
  };
};
