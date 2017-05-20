import {connect} from 'react-redux';

import Messages from '../components/Messages/Messages';

import {messagesDatabase} from '../config/firebase';

var mapStateToProps = function({currentUser, chatMessages, chatUsers}) {
    return {currentUser, chatMessages, chatUsers};
  },
  mapDispatchToProps = function(dispatch) {
    return {
      deleteMessage: function(messageKey) {
        messagesDatabase.child(messageKey).remove();
      }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
