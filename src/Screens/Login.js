import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { signin } from '../actions/userActions';
import "../App.css"
function SignIn(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const userSignin = useSelector(state=>state.userSignin);
    const {loading, userInfo,error} = userSignin;

    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/'
    useEffect(() => {
        if(userInfo){
            props.history.push(redirect)
        }
        return( )=>{
            //
        } 
    },[userInfo]
    );
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(username,password));

    }
    return (
        <div className="pagecontent">
            <div className="form">
                <div className="authBar">
                    <div className="authNavImage"></div>
                    <div className="authNavigation">
                        <Link className="myLinks" to="/login"><div className="authNavItem active"><FontAwesomeIcon icon={faUser}/><div>Login</div></div></Link>
                        <Link className="myLinks" to="/register"><div className="authNavItem"><FontAwesomeIcon icon={faPencilAlt}/><div>Register</div></div></Link>
                    </div>
                </div>
                <div classname="formDiv">
                    <form onSubmit={submitHandler}>
                        <ul className="form-container">
                            <li>
                                <h3 className="formheader">Login Here:</h3>
                            </li>
                            <li className="nomargin">
                                {loading && <div>loading...</div>}
                                {error && <div>Login failed, please check that your login credentials are correct</div>}
                            </li>
                            <li className="displayFlex">
                                <div className="input">
                                    <span><FontAwesomeIcon icon={faEnvelope}/></span><input placeholder="Email/Username" type="text" name="username" id="username" onChange={(e)=>setUsername(e.target.value)} />
                                </div>   
                            </li>
                            <li>
                                <div className="input">
                                <span><FontAwesomeIcon icon={faKey}/></span><input placeholder="Password" type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                
                            </li>
                            <li>
                                <button type="submit"className="signInButton formsubmitbutton" >Sign-In</button>
                            </li>
                            <li className="fullwidth">
                                <div>Dont have an account? <Link to={"/register"} className="button ">Sign up</Link></div>
                            </li>
                        </ul>

                    </form>
                </div>
                

            </div>
        </div>
    )
}

export default SignIn
