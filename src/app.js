document.getElementById('addSubmit').addEventListener('submit', addForm);

const date = document.querySelector('#date');
const Name = document.querySelector('#name');
const Age = document.querySelector('#age');
const Preg = document.querySelector('#preg');
const Glu = document.querySelector('#glu');
const Bp = document.querySelector('#bp');
const Skin = document.querySelector('#skin');
const Insu = document.querySelector('#insu');
const Bmi = document.querySelector('#bmi');
const Diab = document.querySelector('#diab');
const Loc = document.querySelector('#loc');


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCceEMjrhck6iim9nyC_lAGMUktMxbWu_Q",
    authDomain: "prediction-81250.firebaseapp.com",
    projectId: "prediction-81250",
    storageBucket: "prediction-81250.appspot.com",
    messagingSenderId: "112856538405",
    appId: "1:112856538405:web:2b3681368deedf00578ecc",
    measurementId: "G-ZPTSDGWCQB"

});

var db = firebaseApp.firestore();

// add to firebase


function addForm(e){
    e.preventDefault();
    db.collection('datas')
              .add({
                date: date.value,
                name: Name.value,
                age: Age.value,
                pregnancy: Preg.value,
                glucose: Glu.value,
                blood: Bp.value,
                skin: Skin.value,
                insulin: Insu.value,
                bmi: Bmi.value,
                diabetics: Diab.value,
                location: Loc.value,
              })
              .then((docRef) => {
                console.log('Document written');
                document.getElementById('addSubmit').reset();
              })
              .catch((error) => {
                console.error('Error adding document: ', error);
              });


}


