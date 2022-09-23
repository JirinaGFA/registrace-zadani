import React from "react";
import { useState } from "react";

const Registration = () => {

    let inputType = "";
    let defaultUsername = "";

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
     }) 

     function register (event) {
        
        if(!user.username){
            const usernameDefault = "jirinka";
            setUser({...user, username: "jirinka"})
        } 

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
                onChange={(e) => {setUser({...user, email: e.target.value}); console.log(user.email)}} required ></input><br></br>
            <input  placeholder="User Name"
                onChange={(e) => setUser({...user, username: e.target.value})} ></input><br></br>
            <input type="password" placeholder="Password"
                onChange={(e) => setUser({...user, password: e.target.value})} ></input><br></br>
            <input type="password" placeholder="Confirm Password"
                onChange={(e) => setUser({...user, passwordConfirm: e.target.value})}></input><br></br>

            <button type="submit" onClick={register}>Register</button>
        </form>

        </>
    )
}

export default Registration;