import './App.css';
import Walker from './Walker'
function WalkeeScreen(props) { 
    var ads= [];
    var data = props.ads;
    for(var i =0;i<props.ads.length;i++){
        ads[i]= <Walker title = {data[i].title} desc = {data[i].desc} email={data[i].email}/>;
    }
   return(
    <div class="row">
    {ads}
    </div>
   );
}
export default WalkeeScreen;