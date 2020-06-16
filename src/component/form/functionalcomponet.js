import React,{useState} from 'react'
const Ahamdbhi=()=>{
      const [name,setname]=useState('Hamad')

     const  updatename=(e)=>{
          e.preventDefault()

          
        setname("Ahamad Ali")

      }

   
 return(
     <div>

       My name is {name}
         <button  onClick={updatename}> updatenameMy</button>
     </div>
 )

}

 export default Ahamdbhi;