//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDq7N0LiOFuSRHcyXYklHO8VSQEzagg3w0",
      authDomain: "adv-class-93.firebaseapp.com",
      databaseURL: "https://adv-class-93-default-rtdb.firebaseio.com",
      projectId: "adv-class-93",
      storageBucket: "adv-class-93.appspot.com",
      messagingSenderId: "149691269050",
      appId: "1:149691269050:web:a69468fbabce56a4c42783",
      measurementId: "G-RMV79HJ1CD"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 room_name=localStorage.getItem("room_name");
 user_name=localStorage.getItem("user_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      message=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:message,
            like:0
      })
      document.getElementById("msg").innerHTML="";
}
