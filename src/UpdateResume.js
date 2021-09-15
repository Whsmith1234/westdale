import './App.css';
import {route} from'./index'
function UpdateResume() { 
    console.log("WHAT?");
   return(
   <div class = "row">
       <center>
       
        <h3>Update Resume</h3>
         
           
           <input placeholder = "name" id = "name" type="text" name="email" />
           <textarea class ="materialize-textarea"placeholder = "description" id = 'description' />
           
           <button class = "btn black-text" onClick={(e)=>{
            e.preventDefault();
            localStorage.setItem("name",document.getElementById("name").value);
            localStorage.setItem("desc",document.getElementById("description").value);
            route("ads");
            
          }} >Update Resume</button>
   
       </center>
       </div>
     

   );
}
export default UpdateResume;