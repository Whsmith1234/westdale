import './App.css';
import {apply} from './index'
function Ad(props) { 
   return(
    <div class = "Ad">
        
        <center>
    <div class="col s12 m6 l4">
        <div class="card white darken-1">
            <div class="card-content black-text">
            <span class="card-title">{props.title}</span>
            <p>Time {props.time}<br></br>Place {props.place}<br></br>Size {props.size}</p>
            </div>
            <div class="card-action">
            <a href ="#" onClick={(e)=>{
                e.preventDefault();
                apply(props.email)
            }} class="adlink">Take this add</a>
            </div>
        </div>
       
        </div>
        </center>
       </div>
   );
}
export default Ad;
