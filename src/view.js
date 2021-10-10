var firebase = firebase.initializeApp({
    apiKey: "AIzaSyCceEMjrhck6iim9nyC_lAGMUktMxbWu_Q",
    authDomain: "prediction-81250.firebaseapp.com",
    projectId: "prediction-81250",
    storageBucket: "prediction-81250.appspot.com",
    messagingSenderId: "112856538405",
    appId: "1:112856538405:web:2b3681368deedf00578ecc",
    measurementId: "G-ZPTSDGWCQB"

});

var viewdb = firebase.firestore();
var rows = document.querySelector('.rows')
var genBtn = document.querySelector('#btn')


genBtn.addEventListener('click', ()=>{
    viewdb.collection('datas')
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
        const preg = document.createElement('p')
        const glu = document.createElement('p')
        const blood = document.createElement('p')
        const skin = document.createElement('p')
        const insu = document.createElement('p')
        const bmi = document.createElement('p')
        const diab = document.createElement('p')
        const age = document.createElement('p')
        const loc = document.createElement('p')
        const dat = document.createElement('p')
        preg.innerText = items[i].pregnancy
        rows.appendChild(preg)
        glu.innerText = items[i].glucose
        rows.appendChild(glu)
        blood.innerText = items[i].blood
        rows.appendChild(blood)
        skin.innerText = items[i].skin
        rows.appendChild(skin)
        insu.innerText = items[i].insulin
        rows.appendChild(insu)
        bmi.innerText = items[i].bmi
        rows.appendChild(bmi)
        diab.innerText = items[i].diabetics
        rows.appendChild(diab)
        age.innerText = items[i].age
        rows.appendChild(age)
        loc.innerText = items[i].location
        rows.appendChild(loc)
        dat.innerText = items[i].date
        rows.appendChild(dat)
    }

});
})