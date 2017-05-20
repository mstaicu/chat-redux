import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDD7dX6VNsPr9WyKe015FOT8WJAA5FNbP8",
  authDomain: "chat-af2ff.firebaseapp.com",
  databaseURL: "https://chat-af2ff.firebaseio.com",
  projectId: "chat-af2ff",
  storageBucket: "chat-af2ff.appspot.com",
  messagingSenderId: "263476539488"
};

firebase.initializeApp(config);

var firebaseDatabase = firebase.database();

export var usersDatabase = firebaseDatabase.ref('/users');
export var messagesDatabase = firebaseDatabase.ref('/messages');

export var auth = firebase.auth();
export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
