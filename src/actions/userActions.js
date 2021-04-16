import Axios from 'axios'
import Cookie from 'js-cookie'
import { USER_LOGOUT, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS} from '../constants/userConstants';

const signin = (username, password) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST, payload :{username,password}
    });
    try {
        const {data} = await Axios.post("/auth/api/login", {username,password});
        dispatch({
            type: USER_SIGNIN_SUCCESS, payload:data
        });
        Cookie.set('userInfo',JSON.stringify(data))
    } catch (error) {
        dispatch({
            type:USER_SIGNIN_FAILURE, payload:error.message
        })
    }
}


const register = (name, username, password,email) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST, payload :{name, username,password,email}
    });
    try {
        const {data} = await Axios.post("/auth/api/register", {username,password,name,email});
        dispatch({
            type: USER_REGISTER_SUCCESS, payload:data
        });
        Cookie.set('userInfo',JSON.stringify(data))
    } catch (error) {
        dispatch({
            type:USER_REGISTER_FAILURE, payload:error.message
        })
    }
}   

const update = ({ userId, name, email, password }) => async (dispatch, getState) => {
    const { userSignin: { userInfo } } = getState();
    dispatch({ type: USER_UPDATE_REQUEST, payload: { userId, name, email, password } });
    try {
      const { data } = await Axios.put("/auth/api/users/" + userId,
        { name, email, password }, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token
        }
      });
      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
    }
  }

  const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: USER_LOGOUT })
  }

export {signin, register, update, logout};