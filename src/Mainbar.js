import { useState } from "react";

const Mainbar = () => {


    

    return ( 
        <div className="mainbar">

            <h2>Home</h2>

            <button  className="studyalone"> STUDY ALONE </button>
            <br/>
            <a href="studyalone">STUDY ALONE LINK</a>
            <br/>
            <br/>
            <button  className="studywithfriends"> STUDY WITH FRIENDS </button>
            <br/>
            <a href="studywithfriends">STUDY WITH FRIENDS LINK</a>

        
        </div>
     );
}


export default Mainbar;