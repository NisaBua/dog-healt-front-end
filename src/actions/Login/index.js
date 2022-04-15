import {
  LOGIN_CLEAR_DATA,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REQUEST_RESET_PASSWORD_CLEAR_DATA,
  REQUEST_RESET_PASSWORD_SUCCESS,
  REQUEST_RESET_PASSWORD_FAIL,
  SET_PASSWORD_CLEAR_DATA,
  SET_PASSWORD_FAIL,
  SET_PASSWORD_SUCCESS
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
  },
  RequestResetPassword: (username, birthDate) => async dispatch => {
    const response = await LoginService.requestResetPassword(username, birthDate)
    if (response.status === 200) {
      handleResponse.Success({
        type: REQUEST_RESET_PASSWORD_SUCCESS,
        dispatch,
        payload: response.requestResetPassword
      })
    } else {
      handleResponse.Error({
        type: REQUEST_RESET_PASSWORD_FAIL,
        errorPage: true,
        dispatch,
        error: response.error
      })
    }
  },
  ClearRequestResetPassword: () => async dispatch => {
    dispatch({
      type: REQUEST_RESET_PASSWORD_CLEAR_DATA
    })
  },
  setPassword: (username, password) => async dispatch => {
    const response = await LoginService.setPassword(username, password)
    if (response.status === 200) {
      handleResponse.Success({
        type: SET_PASSWORD_SUCCESS,
        dispatch,
        payload: response.setPassword
      })
    } else {
      handleResponse.Error({
        type: SET_PASSWORD_FAIL,
        errorPage: true,
        dispatch,
        error: response.error
      })
    }
  },
  ClearSetPassword: () => async dispatch => {
    dispatch({
      type: SET_PASSWORD_CLEAR_DATA
    })
  }
}

export default loginAction
