export var addMessage = function(data) {
  var {content, timestamp, uid} = data.val();

  return {
    type: 'ADD_MESSAGE',
    payload: {
      key: data.key,
      content,
      timestamp,
      uid
    }
  };
};

export var removeMessage = function(data) {
  return {
    type: 'REMOVE_MESSAGE',
    payload: {
      key: data.key
    }
  };
};
