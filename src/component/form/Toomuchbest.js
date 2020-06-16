import React, { useState } from 'react';

const Toomuchbest = () => {

    const [state, setState] = useState({})

    const updatefield = (e) => {
        state[e.target.id] = e.target.value
        setState({ ...state })

    }
    const getState = () => {
        console.log(state)

    }
    return (
        <div>
            <label>User name</label> <input placeholder="Username" id="UserName" onChange={updatefield} />
            <label> fatrher name</label> <input placeholder="fathername" id="fatherName" onChange={updatefield} />
            <label> friendname</label> <input placeholder="fathername" id="FriendName" onChange={updatefield} />
            <label> friendname</label> <input placeholder="dishname" id="bestDishName" onChange={updatefield} />
            <label> friendname</label> <input placeholder="bestgamename" id="bestgameName" onChange={updatefield} />
           

            <button onClick={getState}>GetState</button>
        </div>
    );
};

export default Toomuchbest;