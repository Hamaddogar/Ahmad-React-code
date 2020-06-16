

 import React from 'react'
 import {  Link } from "react-router-dom";


 class Card extends React.Component{

 render()
 {

    return(


       <div>
          <h1>this is abouts</h1>

          <Link to="/about">About</Link>
             <br/>
             <Link to="/Contact">Contact</Link>

       </div>
    )
 }

 }
export default Card;