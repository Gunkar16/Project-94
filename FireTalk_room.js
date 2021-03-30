Name = localStorage.getItem("UserName");
FirstLetter = Name.charAt(0);
console.log(Name);
console.log(FirstLetter);
document.getElementById("FT").innerHTML=FirstLetter;
randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
document.getElementById("FT").style.backgroundColor=randomColor;
console.log(randomColor);
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCZwh_gJvpBy8umPZwKHGIC2Aodu2WXby0",
    authDomain: "firetalk-1ef32.firebaseapp.com",
    databaseURL: "https://firetalk-1ef32-default-rtdb.firebaseio.com",
    projectId: "firetalk-1ef32",
    storageBucket: "firetalk-1ef32.appspot.com",
    messagingSenderId: "352828258063",
    appId: "1:352828258063:web:c6fbac9308763bd6ad307a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);