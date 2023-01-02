var firebaseConfig = {
      apiKey: "AIzaSyD8UEZLGK0FGObyQ4XRSTbSWW0eEViuNAg",
      authDomain: "kwitter-chitter-chatter-bad.firebaseapp.com",
      databaseURL: "https://kwitter-chitter-chatter-bad-default-rtdb.firebaseio.com",
      projectId: "kwitter-chitter-chatter-bad",
      storageBucket: "kwitter-chitter-chatter-bad.appspot.com",
      messagingSenderId: "273965915141",
      appId: "1:273965915141:web:bbfa9ef459e7607985906c",
      measurementId: "G-G6L9XDVVHP"
    };
    
    firebase.initializeApp(firebaseConfig);



function display(){
    petname= document.getElementById("name").value;
    type = document.getElementById("type").value;
    age = document.getElementById("age").value;
    breed = document.getElementById("breed").value;
    seen = document.getElementById("seen").value;
    contact = document.getElementById("contact").value;

    firebase.database().ref("/").child(petname).update({
        name: petname,
        type: type,
        age: age,
        breed: breed,
        seen: seen,
        contact: contact
    });
    localStorage.setItem("petname", petname);
    window.location = "pet.html"
}
