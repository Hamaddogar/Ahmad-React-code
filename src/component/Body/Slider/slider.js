import React from 'react'

class ClassComonent extends React.Component {

   state = {

      name: "Hamad"
   }
   updateFucntion=()=>{
  this.setState({name:"Ahmad"})

   }
   render() {
      return (

         <div>
            My Name iS {this.state.name}
             <button onClick={updateFucntion}>updateFucntion</button>
         </div>
      )

   }


}
export default ClassComonent;