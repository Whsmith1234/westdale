import './App.css';
import Ad from './Ad'
function WalkerScreen(props) { 
   
      var ads= [];
      var data = props.ads;
      for(var i =0;i<props.ads.length;i++){
          ads[i]= <Ad email={data[i].email} title = {data[i].title} time={data[i].time} place = {data[i].place} size={data[i].size}/>;
      }
     return(
      <div class="row">
      {ads}
      </div>
     );
  
}
export default WalkerScreen;