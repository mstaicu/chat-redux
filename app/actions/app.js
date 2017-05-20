export var initiatingAuthProcess = function() {
  return {type: 'INITIATING_AUTH_PROCESS'};
};

export var updateInput = function(content) {
  return {
    type: 'UPDATE_INPUT',
    payload: {
      content: content
    }
  };
};

export var clearInput = function() {
  return {type: 'CLEAR_INPUT'};
};
