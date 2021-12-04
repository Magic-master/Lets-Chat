// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCkSLX2GEdZP-q0POxlGI53b6JgOxEWSjM",
      authDomain: "let-s-chat-3b718.firebaseapp.com",
      databaseURL: "https://let-s-chat-3b718-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-3b718",
      storageBucket: "let-s-chat-3b718.appspot.com",
      messagingSenderId: "1018210497837",
      appId: "1:1018210497837:web:a3da27bb38d9b7bc864fa4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();

function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
            purpose: "adding user"
      });
}