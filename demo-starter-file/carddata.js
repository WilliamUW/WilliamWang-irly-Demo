//https://www.youtube.com/watch?v=cWdGmUFXua8

// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAsKEmxVNsnDUDxZJ7kwTZMk8ehDrOdlc0",

  authDomain: "irly-demo.firebaseapp.com",

  databaseURL: "https://irly-demo-default-rtdb.firebaseio.com",

  projectId: "irly-demo",

  storageBucket: "irly-demo.appspot.com",

  messagingSenderId: "179945535098",

  appId: "1:179945535098:web:a6f270ea7e3072ecb0edc3"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log(firebaseConfig);
console.log(app);
// Get a reference to the database service
const database = getDatabase(app);

console.log(database);

import { ref, child, get } from "firebase/database";

let databaseReference = get(ref(getDatabase()));
console.log(databaseReference);
let data = [];
databaseReference.then((snapshot) => {
  if (snapshot.exists()) {
    console.log("Data available");
    console.log(snapshot.val());
    data = snapshot.val();
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


var filePath = "./carddata.json";
// data = require(filePath);

console.log(data);
export default data;
/*
 export default [
  {
    id: 1,
    name: "Hooman",
    images: [
      require("./assets/human.png"),
      require("./assets/human2.png"),
      require("./assets/human3.png"),
    ],
  },
  {
    id: 2,
    name: "Megalodon",
    images: [
      require("./assets/shark.png"),
      require("./assets/shark2.png"),
      require("./assets/shark3.png"),
    ],
  },
  {
    id: 3,
    name: "Panda",
    images: [
      require("./assets/panda.png"),
      require("./assets/panda2.png"),
      require("./assets/panda3.png"),
    ],
  },
  {
    id: 4,
    name: "Octopups",
    images: [
      require("./assets/octo.png"),
      require("./assets/octo2.png"),
      require("./assets/octo3.png"),
    ],
  },
];
*/

