function chatInputReducer(state = '', action) {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return action.payload.content;
    case 'CLEAR_INPUT':
      return '';
    default:
      return state;
  };
};

function appStateReducer(state = '', action) {
  switch (action.type) {
    case 'INITIATING_AUTH_PROCESS':
      return 'INITIATING_AUTH_PROCESS';
    case 'SIGN_IN':
      return 'AUTHENTICATED';
    case 'SIGN_OUT':
      return 'ANONYMOUS';
    default:
      return state;
  };
};

export default function(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return {
        ...state,
        chatInput: chatInputReducer(state.chatInput, action)
      };

    case 'CLEAR_INPUT':
      return {
        ...state,
        chatInput: chatInputReducer(state.chatInput, action)
      };

    case 'INITIATING_AUTH_PROCESS':
      return {
        ...state,
        status: appStateReducer(state.status, action)
      };

    case 'SIGN_IN':
      return {
        ...state,
        status: appStateReducer(state.status, action)
      };

    case 'SIGN_OUT':
      return {
        ...state,
        status: appStateReducer(state.status, action)
      };

    default:
      return state;
  };
};
