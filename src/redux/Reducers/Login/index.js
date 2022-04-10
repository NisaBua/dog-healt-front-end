// Constants
import {
  LOGIN_CLEAR_DATA,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from '../../Constants/Login'

const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case LOGIN_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case LOGIN_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default login
