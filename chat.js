var firebaseConfig = {
    apiKey: "AIzaSyBfzC5ErIqqfcBl_wI2P0KLvOHcgeVHH_c",
    authDomain: "lets-chat-web-app-62944.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-62944-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-62944",
    storageBucket: "lets-chat-web-app-62944.appspot.com",
    messagingSenderId: "157265683531",
    appId: "1:157265683531:web:4deb2dc7ac094061ad59ce"
  };
  
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}
