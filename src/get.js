var firebase = firebase.initializeApp({
    apiKey: "AIzaSyCceEMjrhck6iim9nyC_lAGMUktMxbWu_Q",
    authDomain: "prediction-81250.firebaseapp.com",
    projectId: "prediction-81250",
    storageBucket: "prediction-81250.appspot.com",
    messagingSenderId: "112856538405",
    appId: "1:112856538405:web:2b3681368deedf00578ecc",
    measurementId: "G-ZPTSDGWCQB"

});

var getdb = firebase.firestore();
var cards = document.querySelector('.cards')
var getBtn = document.querySelector('#getBtn')
var PN = document.querySelector('#pn')

var PName = document.querySelector('#pName')
var Ref = document.querySelector('#refresh')

Ref.addEventListener('click', () =>{
    location.reload()
})

getBtn.addEventListener('click', ()=>{
    console.log(PName.value)
   getdb.collection('datas').where("name", '==', `${PName.value}`)
  .get()
  .then((querySnapshot) => {
    let items = [];
    querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
        let data = doc.data();
        items.push(data);
    });
    console.log(items)
    for(let i=0;i <items.length; i++){
        const preg = document.createElement('div')
        const glu = document.createElement('div')
        const blood = document.createElement('div')
        const skin = document.createElement('div')
        const insu = document.createElement('div')
        const bmi = document.createElement('div')
        const diab = document.createElement('div')
        const age = document.createElement('div')
        const loc = document.createElement('div')

        PN.innerHTML = items[i].name
        
        preg.classList.add("card")
        preg.innerHTML = `<p>PREGNANCY</p><h1>${items[i].pregnancy}</h1>`
        cards.appendChild(preg)

        glu.classList.add("card")
        glu.innerHTML = `<p>GLUCOSE</p> <h1>${items[i].glucose}</h1>`
        cards.appendChild(glu)

        blood.classList.add("card")
        blood.innerHTML =`<p>BP</p> <h1>${items[i].blood}</h1>` 
        cards.appendChild(blood)

        skin.classList.add("card")
        skin.innerHTML =`<p>SKIN</p> <h1>${items[i].skin}</h1>`
        cards.appendChild(skin)

        insu.classList.add("card")
        insu.innerHTML =`<p>INSULIN</p> <h1>${items[i].insulin}</h1>` 
        cards.appendChild(insu)

        bmi.classList.add("card")
        bmi.innerHTML =`<p>BMI</p> <h1>${items[i].bmi}</h1>` 
        cards.appendChild(bmi)

        diab.classList.add("card")
        diab.innerHTML =`<p>DIABETICS</p> <h1>${items[i].diabetics}</h1>` 
        cards.appendChild(diab)

        age.classList.add("card")
        age.innerHTML =`<p>AGE</p> <h1>${items[i].age}</h1>` 
        cards.appendChild(age)

        loc.classList.add("card")
        loc.innerHTML =`<p>LOCATION</p> <h1>${items[i].location}</h1>`
        cards.appendChild(loc)
    }

});
})