import {connect} from 'react-redux';

import ChatInput from '../components/ChatInput/ChatInput';

import {messagesDatabase} from '../config/firebase';

import {updateInput, clearInput} from '../actions/app';

function pushMessageToDatabase(message) {
  messagesDatabase.push(message);
};

var mapStateToProps = function({currentUser, appMetadata}) {
    return {currentUser: currentUser, chatInput: appMetadata.chatInput};
  },
  mapDispatchToProps = function(dispatch) {
    return {
      handleChange: function(event) {
        dispatch(updateInput(event.target.value));
      },
      handleSubmit: function(event, content, uid) {
        event.preventDefault();

        if (content) {
          pushMessageToDatabase({content: content, uid: uid, timestamp: Date.now()});

          dispatch(clearInput());
        }
      }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
