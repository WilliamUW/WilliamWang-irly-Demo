//https://www.youtube.com/watch?v=cWdGmUFXua8

// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need




var filePath = "./carddata.json";
var data = require(filePath);
// url (required), options (optional)
fetch('https://jsonkeeper.com/b/8GEK', {
    method: 'get'
}).then(function(response) {
  console.log(response);
}).catch(function(err) {
    // Error :(
});
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