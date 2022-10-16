// import { createAction } from 'redux-actions';
import axios from 'axios';


export function loginAction(data) {
    return dispatch => {
      axios.get('http://localhost:4000/users')
        .then((res) => {
          let value = res.data
          var result = value.find(val => val.username === data.username && val.password === data.password)
          
          if (result) {
            dispatch(loginMe(true, result.username))
            
          }
          else {
            dispatch(loginMe(false))
          }
        })
    }
  }
  
  export function loginMe(isAuthenticated, username) {
    return {
      type: 'LOGIN',
      isAuthenticated: isAuthenticated,
      user: username
      
    }
  }
  