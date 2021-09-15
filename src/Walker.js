import './App.css';
function Walker(props) { 
   return(
    <div class = "Ad">
        <center>
       
    <div class="col s12 m6 l4">
        <div class="card white darken-1">
            <div class="card-content black-text">
            <span class="card-title">{props.title}</span>
            <p>Description {props.desc}</p>
            </div>
            <div class="card-action ">
            <a href={"mailto:"+props.email} class="adlink">Take this Ad</a>
            
            </div>
        </div>
       
        </div>
       
        </center></div>
   );
}
export default Walker;