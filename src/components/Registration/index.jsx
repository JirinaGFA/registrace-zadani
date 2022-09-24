import React from "react";
import { useState } from "react";

const Registration = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
     }) 

     function fillUsername(){       
        if(!user.username){
            let prefilledUsername = user.email.split("@")[0];
            setUser({...user, username: prefilledUsername})
        } 
     }

     function register (event) {
        event.preventDefault()    
        console.log(user);
     }
    /*  function handleChange (e, field) { 
        setUser({...user, field: e.target.value})
     } */

    return(
        <>
        <form>
            <input type="email" placeholder="Email address"
                onChange={(e) => {setUser({...user, email: e.target.value })}} required ></input><br></br>
            <input  placeholder="User Name" value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})} ></input><br></br>
            <input type="password" placeholder="Password" required
                onChange={(e) => setUser({...user, password: e.target.value})} ></input><br></br>
            <input type="password" placeholder="Confirm Password" required
                onChange={(e) => setUser({...user, passwordConfirm: e.target.value})}></input><br></br>

            <button type="submit" onClick={register} onMouseOver={fillUsername}>Register</button>
        </form>
        </>
    )
}

export default Registration;