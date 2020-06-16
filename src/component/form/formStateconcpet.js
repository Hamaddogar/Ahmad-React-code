import React from 'react'


class Form extends React.Component {

   state = {
      email: '',
      password: ''

   }

   emailHandler = (e) => {

      this.setState({ email: e.target.value })
   }
   passwordhandelr = (e) => {
      this.setState({ password: e.target.value })

   }

   mygetvalue = (e) => {
      e.preventDefault()
      console.log(this.state)


   }
   render() {

      return (

         <div>


            <form>
               Email <input type="email" placeholder="Email" onChange={this.emailHandler} />
 password <input type="password" placeholder="Password" onChange={this.passwordhandelr} />
 password <input type="password" placeholder="Password" onChange={this.passwordhandelr} />
 
               <button onClick={this.mygetvalue}>Getvalue</button>






            </form>


         </div>
      )

   }



}
export default Form