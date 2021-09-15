import './App.css';
import {route,postNewAd} from'./index';
function NewAdd() { 
   return(
      <center>

        
        <h3>New Ad</h3>
         
           <input placeholder="Title" type="text" id="title" />
        
           <input  placeholder="Time" type="text" id="time" />
        
           <input placeholder="Place" type="text" id="place" />
         
            <label>
              Size
              <input type="range" id="size" name="size" min="0" max="3"/>
            </label>
           <span class= "btn" onClick={(e)=>{
             e.preventDefault();
             route("options")
             }}>Cancel</span>
              <span class= "btn" onClick={(e)=>{
             e.preventDefault();
             var title = document.getElementById("title").value;
             var time = document.getElementById("time").value;
             var place = document.getElementById("place").value;
             var size = document.getElementById("size").value;
             postNewAd(title,time,place,size);
             route("options");
             }}>Post</span>
           
       
       </center>
   );
}
export default NewAdd;