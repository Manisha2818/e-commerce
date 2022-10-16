import issueConstants from './../constants/issueConstants';

// const initState = {
//     user: '',
//     feedbackDetail: [],
//     productList: [],
//     productDetail: {},
//     isAuthed: false
// }

const login = (state=initState, action) => {
    switch (action.type) {
      
      case issueConstants.LOGIN:
        return {
          ...state,
          isAuthed: action.isAuthenticated,
          user: action.user
        }
        case issueConstants.LOGOUT: 
        return {
          ...state,
          ...initState,
        }
      default:
        return state;
    }
}

export const getLoginState = state => state.login;

export default combineReducers({
    login,
  });