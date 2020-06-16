 import React from 'react'
 import {  Link } from "react-router-dom";
  class Header extends React.Component{

  render()
  {

     return(


        <div>
            <h1>This is home</h1>
          <Link to="/">Home</Link>

             <Link to="/about">About</Link>
             <br/>
             <Link to="/Contact">Contact</Link>

        </div>
     )
  }

  }
export default Header;