var firebaseConfig = {
    apiKey: "AIzaSyAX4dMILQW_pfbjN5e3vstFrbHGAVl1t3I",
    authDomain: "c-94-7a962.firebaseapp.com",
    databaseURL: "https://c-94-7a962-default-rtdb.firebaseio.com",
    projectId: "c-94-7a962",
    storageBucket: "c-94-7a962.appspot.com",
    messagingSenderId: "862391140125",
    appId: "1:862391140125:web:561223086d4518fd74abf4",
    measurementId: "G-JYE0WCMV7B"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 User_name=localStorage.getItem("name");
 room_name=localStorage.getItem("room");
 function send () {
     Msg1=document.getElementById("msg").value ;
     firebase.database().ref(room_name).push({
         name:User_name,
        massag:Msg1,
        likes:0
     });
     document.getElementById("msg").value="";
    }
    function logout() {
        localStorage.removeItem("name");
      localStorage.removeItem("room");
      window.location="index.html";
    }