export var signIn = function(user) {
  return {
    type: 'SIGN_IN',
    payload: {
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      uid: user.uid
    }
  };
};

export var signOut = function() {
  return {type: 'SIGN_OUT'};
};
