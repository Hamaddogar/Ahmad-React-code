

 import React from 'react'
 import Header from '../Header/Header'
 import {  Link } from "react-router-dom";

 class Footer extends React.Component{

 render()
 {

    return(


       <div>
           <h1>This is contact page</h1>
           <Link to="/about">About</Link>
             <br/>
             <Link to="/Contact">Contact</Link>

       
       </div>
    )
 }

 }
export default Footer;