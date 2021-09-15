import './App.css';
import {signIn,route} from'./index'
function SignIn() { 
   return(
   <div class = "row">
       <center>
       
        <h1>Sign in/Sign Up</h1>
         
           
           <input placeholder = "email" id = "email" type="email" name="email" />
           <input placeholder = "password" id = 'pass' type="password" name="password" />
           
           <button class = "btn black-text" onClick={(e)=>{
            e.preventDefault();
            signIn(document.getElementById('email').value,document.getElementById('pass').value);

            route("start")
          
          
          }} >Sign In</button>
   
       </center>
       </div>
     

   );
}
export default SignIn;