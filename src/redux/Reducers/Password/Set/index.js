// Constants
import {
  SET_PASSWORD_CLEAR_DATA,
  SET_PASSWORD_FAIL,
  SET_PASSWORD_SUCCESS
} from '../../../Constants/Login'

const setPassword = (state = {}, action) => {
  switch (action.type) {
    case SET_PASSWORD_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case SET_PASSWORD_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case SET_PASSWORD_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default setPassword
