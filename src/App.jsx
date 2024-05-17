import React from "react";
import './App.css';
import Expence from "./component/Expence";
import TrackExpence from "./component/TrackExpence";
function App(){
 return(
    <>
      <div className="Main">
         <Expence/>
         {/* <TrackExpence/> */}
      </div>
    </>
 )
}
export default App;