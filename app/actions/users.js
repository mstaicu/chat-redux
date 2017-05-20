export var addUser = function(data) {
  var {uid, displayName, photoURL, email} = data.val();

  return {
    type: 'ADD_USER',
    payload: {
      uid,
      displayName,
      photoURL,
      email
    }
  };
};

export var removeUser = function(data) {
  return {
    type: 'REMOVE_USER',
    payload: {
      uid: data.key
    }
  };
};
