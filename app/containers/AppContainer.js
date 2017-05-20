import {connect} from 'react-redux';

import App from '../components/App/App';

import {auth, googleAuthProvider, usersDatabase} from '../config/firebase';

import {signIn, signOut} from '../actions/auth';
import {initiatingAuthProcess} from '../actions/app';

import {addUser} from '../actions/users';

function isUserSignedOut(userStatus) {
  return ['INITIATING_AUTH_PROCESS', 'ANONYMOUS'].includes(userStatus);
};

function isUserLoggedIn(userStatus) {
  return ['INITIATING_AUTH_PROCESS', 'ANONYMOUS'].includes(userStatus) === false;
};

function isPageLoading(userStatus) {
  return ['INITIATING_AUTH_PROCESS'].includes(userStatus);
};

var mapStateToProps = function({currentUser, appMetadata}) {
    return {
      currentUser: currentUser,
      userStatus: {
        userIsSignedOut: isUserSignedOut(appMetadata.status),
        userIsSignedIn: isUserLoggedIn(appMetadata.status)
      },
      pageLoading: isPageLoading(appMetadata.status)
    };
  },
  mapDispatchToProps = function(dispatch) {
    return {
      signIn: function() {
        /**
         * Set the signing in/out as in progress
         */
        dispatch(initiatingAuthProcess());

        auth.signInWithPopup(googleAuthProvider);
      },

      signOut: function() {
        /**
         * Set the signing in/out as in progress
         */
        dispatch(initiatingAuthProcess());

        auth.signOut();
      }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
