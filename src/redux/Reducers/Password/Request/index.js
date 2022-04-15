// Constants
import {
  REQUEST_RESET_PASSWORD_CLEAR_DATA,
  REQUEST_RESET_PASSWORD_FAIL,
  REQUEST_RESET_PASSWORD_SUCCESS
} from '../../../Constants/Login'

const requestResetPassword = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case REQUEST_RESET_PASSWORD_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case REQUEST_RESET_PASSWORD_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default requestResetPassword
