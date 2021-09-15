import './App.css';
import {route} from './index'


function App() { 
  return (
   <div>
        <h1 href="#" class=" center  brand-logo white-text"><span class = "">Westdale Dog Walking</span> </h1>
        <center>
          <br></br>
          <div class="btn black-text" onClick={(e)=>{localStorage.setItem('role','walkee');route("signIn")}}>I want to have my dog walked</div>
          <div class="btn white black-text" onClick={(e)=>{localStorage.setItem('role','walker');route("signIn")}}>I want to walk dogs</div>
        </center>     
    </div>
  );
}

export default App;
