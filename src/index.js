import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UpdateResume from './UpdateResume';
import App from './App';
import WalkeeScreen from './WalkeeScreen'
import WalkerScreen from './WalkerScreen'
import NewAdd from'./NewAdd'
import SignIn from './SignIn'
import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { getDatabase,ref,get,set } from "firebase/database";
/*
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
const firebaseConfig = {
  apiKey: "AIzaSyDMa-LaGlJlGtQ5tepMVZ-P3nvZp0g45oE",
  authDomain: "somethi-df680.firebaseapp.com",
  projectId: "somethi-df680",
  storageBucket: "somethi-df680.appspot.com",
  messagingSenderId: "497528952614",
  appId: "1:497528952614:web:a583373e3e3a88142153e7"
};
initializeApp(firebaseConfig);

const auth = getAuth();
signOut(auth);
/*
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/
var User;
onAuthStateChanged(auth, (user) => {
  if (user) {
    User = user;
    var role = localStorage.getItem('role');
    if(role === 'walkee'){
      route("options")
    }else if(role === 'walker'){
      route("ads")
    }
    
  } else {
    route("start");
  }
});

export function signIn(email,password){
    signInWithEmailAndPassword(auth,email, password).catch(()=>{
      createUserWithEmailAndPassword(auth,email,password)
    }).catch((e)=>{alert(e)});
  
}
/*
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *
 */
export function postNewAd(name,appointment,address,dogSize){
  console.log(dogSize);
  console.log(User.uid);
  var startingRef = ref(getDatabase(),'/AdsForReview/'+User.uid);
  console.log(startingRef);
  set(startingRef, {
    title: name,
    time: appointment,
    size: dogSize,
    place: address
  });
}
export function apply(email){
  alert("Thanks for applying");
  var startingRef = ref(getDatabase(),'/Options/'+email+'/'+User.uid);
  set(startingRef, {
    title: localStorage.getItem("name"),
    email: User.email,
    desc: localStorage.getItem("desc")
  });
}
/*
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
export function route(page){
  switch(page){
    case "signIn":
      ReactDOM.render(
      <React.StrictMode>
    
      <div class="container">
      <SignIn/>
      </div>
   
      </React.StrictMode>,
      document.getElementById('root')
    );  
    break;
    case "start":
          ReactDOM.render(
            <React.StrictMode>
            <div class="container">
            <App/>
            </div>
            </React.StrictMode>,
            document.getElementById('root')
          );  
     break;
     case "newAdd":
      ReactDOM.render(
        <React.StrictMode>
        <div class="container">
        <NewAdd/>
        </div>
       
        </React.StrictMode>,
        document.getElementById('root')
      );  
      break;
      case "ads":
          var dbRef = ref(getDatabase(),'/AdsForReview');
            get(dbRef).then((snapshot) => {
              if (snapshot.exists()) {
                localStorage.setItem("data",JSON.stringify(snapshot.val()));
              } else {
                console.log("No data available");
              }
            }).catch((error) => {
              console.error(error);
            }).then(()=>{
          var data = JSON.parse(localStorage.getItem("data"));
          console.log(data);
          var arrayOfAds = [];
          for(var i =0;i<Object.keys(data).length;i++){
            var ref = Object.keys(data)[i];
            arrayOfAds[i]=data[Object.keys(data)[i]];
            arrayOfAds[i].email= Object.keys(data)[i];
          }
          ReactDOM.render(
            <React.StrictMode>
            <div class="container">
            <center><h1 class = "white-text">Ads</h1><span class = "addButton btn right" onClick={(e)=>{
          e.preventDefault();
          route("updateResume");
        }}> Make/UpdateResume</span><span class = "addButton btn right" onClick={(e)=>{
          e.preventDefault();
          signOut(auth);
        }}>Sign Out</span></center>
            <WalkerScreen ads={arrayOfAds}/>
            </div>
            </React.StrictMode>,
            document.getElementById('root')
          );  
        });
     break;
     case "options":
      var dbRef = ref(getDatabase(),'/Options/'+User.uid);
      get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
          localStorage.setItem("data",JSON.stringify(snapshot.val()));
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      }).then(()=>{
    var data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    var arrayOfAds = [];
    for(var i =0;i<Object.keys(data).length;i++){
      var ref = Object.keys(data)[i];
      arrayOfAds[i]=data[Object.keys(data)[i]];
    }
      ReactDOM.render(
        <React.StrictMode>
        <div class="container">
        <center><div class="row"><h1 class = "white-text">Options</h1> <span class = "addButton btn right" onClick={(e)=>{
          e.preventDefault();
          route("newAdd");
        }}> New Ad</span><span class = "addButton btn right" onClick={(e)=>{
          e.preventDefault();
          signOut(auth);
        }}> Sign Out</span> </div></center>
        <WalkeeScreen ads={arrayOfAds}/>
        </div>
        </React.StrictMode>,
        document.getElementById('root')
      );  
      });
     break;
     


     case 'updateResume':
      ReactDOM.render(
        <React.StrictMode>
        <UpdateResume/>
        </React.StrictMode>,
        document.getElementById('root')
      );
     break;
  }
}
ReactDOM.render(
  <React.StrictMode>
      <div class="container">
      <UpdateResume/>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);


