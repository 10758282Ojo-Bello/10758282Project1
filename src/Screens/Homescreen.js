import React from 'react'
import { Link } from "react-router-dom"
import { logout, update } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css'
function Homescreen(props) {
    const userSignin = useSelector(state=>state.userSignin);
    const userRegister = useSelector(state => state.userRegister);
const {userInfo} = userSignin;
const {userInfo2} = userRegister;
const dispatch = useDispatch();
const handleLogout = () => {
    dispatch(logout());
    props.history.push("/")
    window.location.reload(false);
    
  }
let activeUser
if (userInfo!== {}&& userInfo){
    activeUser = userInfo
} else if(userInfo2!=={}&&userInfo2){
    activeUser = userInfo2
}
    return (
        <div className="homepagenav">
            {
                activeUser? <h1 className="homepagenav">Welcome {activeUser.name}</h1>:
                <h1><Link to="/login">sign in</Link> or <Link to="register">register</Link></h1>
            }
            {
                activeUser? <button type="button" onClick={handleLogout} className="button secondary full-width">Logout</button>:
                <text>Sign in if you have an account, or register if you dont</text>
            
        }</div>
    )
}

export default Homescreen
