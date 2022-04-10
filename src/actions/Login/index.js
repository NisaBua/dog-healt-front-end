import {
  LOGIN_CLEAR_DATA,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from '../../redux/Constants/Login'

// Service
import LoginService from '../../services/Login'

// Utils
import handleResponse from '../../utils/Response'

const loginAction = {
  Login: (username, password) => async dispatch => {
    const response = await LoginService.Login(username, password)
    if (response.status === 200) {
      handleResponse.Success({
        type: LOGIN_SUCCESS,
        dispatch,
        payload: response.lists
      })
    } else {
      handleResponse.Error({
        type: LOGIN_FAIL,
        errorPage: true,
        dispatch,
        error: response.error
      })
    }
  },
  ClearLogin: () => async dispatch => {
    dispatch({
      type: LOGIN_CLEAR_DATA
    })
  }
}

export default loginAction
