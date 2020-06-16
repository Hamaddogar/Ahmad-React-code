import React, { useState } from 'react';

const BestFrom = () => {
    const [name, setName] = useState('')
    const [fname, setfName] = useState('')
    const [frname, setfrName] = useState('')


    const updatename = (e) => {
        setName(e.target.value)

    }
    const updatefname = (e) => {
        setfName(e.target.value)

    }
    const updatefrname = (e) => {
        setfrName(e.target.value)

    }

  const   getState=(e)=>{
       e.preventDefault()
     let allstate ={name,fname,frname}
  console.log(allstate)

    }





    return (
        <div>
            Today Work
            <label>User name</label> <input placeholder="Username" onChange={updatename} />
            <label> fatrher name</label> <input placeholder="fathername" onChange={updatefname} />
            <label> friendname</label> <input placeholder="fathername" onChange={updatefrname} />

 <button onClick={getState}>GetState</button>
        </div>
    );
};

export default BestFrom;