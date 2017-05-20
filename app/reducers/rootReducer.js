import {
    combineReducers
} from 'redux';

import appMetadataReducer from './appMetadataReducer';
import chatMessagesReducer from './chatMessagesReducer';
import chatUsersReducer from './chatUsersReducer';
import currentUserReducer from './currentUserReducer';

export default combineReducers({
  appMetadata: appMetadataReducer,
  chatMessages: chatMessagesReducer,
  chatUsers: chatUsersReducer,
  currentUser: currentUserReducer
});
