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
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName()this.id' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
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
function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}