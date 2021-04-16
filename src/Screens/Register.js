import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import {register} from "../actions/userActions"
import '../App.css'
function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const userRegister = useSelector(state=>state.userRegister);
    const {loading, userInfo2,error} = userRegister;

    const dispatch = useDispatch();

    const redirect = "/"

    useEffect(() => {
        if(userInfo2){
            console.log(userInfo2)
            props.history.push(redirect)
        }else {
            console.log(userInfo2)
        }
        return( )=>{
            //
        } 
    },[userInfo2]
    );

    const displayError = () => {
        document.querySelector('.errorMessage').innerHTML = "The passwords do not match"
    }
    const displayError2 = () => {
        document.querySelector('.errorMessage').innerHTML = "Your email must be a real email address"
    }
    const removeError = () => {
        document.querySelector(".errorMessage").innerHTML = ""
    }
    const submitHandler = (e) => {
        e.preventDefault();
        removeError()
        if(!email.includes("@")){
            displayError2()
        } else{
            if(password===rePassword){
                dispatch(register(name,username,password,email));
            } else{
                displayError()
            }
        }
        
        
    }
    return (
        <div className="pagecontent">
            <div className="form">
                <div className="authBar">
                    <div className="authNavImage"></div>
                    <div className="authNavigation">
                        <Link className="myLinks" to="/login"><div className="authNavItem"><FontAwesomeIcon icon={faUser}/><div>Login</div></div></Link>
                        <Link className="myLinks" to="/register"><div className="authNavItem active"><FontAwesomeIcon icon={faPencilAlt}/><div>Register</div></div></Link>
                    </div>
                </div>
                <div className="formDiv">
                    <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h3 className="formheader">Create an Account</h3>
                        </li>
                        <li className="nomargin">
                            {loading && <div>loading...</div>}
                            {error && <div>Unable to create user, this may be due to the username or email already being in use</div>}
                        </li>
                        <li>
                            <div className="input">
                            <span><FontAwesomeIcon icon={faEnvelope}/></span><input placeholder="Email" type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            
                        </li>
                        <li>
                            <div className="input">
                                <span><FontAwesomeIcon icon={faUser}/></span><input placeholder="Username" type="text" name="username" id="username" onChange={(e)=>setUsername(e.target.value)} />
                            </div>
                            
                        </li>
                        <li>
                            <div className="input">
                                <span><FontAwesomeIcon icon={faPencilAlt}/></span><input placeholder="Your Full Name" type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} />
                            </div>                           
                        </li>
                        <li>
                            <div className="input">
                                <span><FontAwesomeIcon icon={faKey}/></span><input placeholder="Password" type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </li>
                        <li>
                            <div className="input">
                                <span><FontAwesomeIcon icon={faKey}/></span><input placeholder="re-enter password" type="password" name="repassword" id="repassword" onChange={(e) => setRePassword(e.target.value)} />
                            </div>
                            
                        </li>
                        <li className="Error">
                            <p className="errorMessage"></p>
                        </li>
                        <li>
                            <button type="submit"className="signInButton formsubmitbutton" >Register</button>
                        </li>
                        <li className="">
                            <div className="">Have an account? <Link to={"/login"} className="button ">Sign in</Link></div>
                        </li>

                    </ul>

                </form></div>
                

            </div>
        </div>
    )
}

export default Register
