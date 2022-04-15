import axios from 'axios'
import { servicePath } from '../../utils/config'

const LoginService = {
  Login: async (username, password) => {
    let response = null
    try {
      const responseData = await axios.post(
        `${servicePath.service.general}/api/login`,
        {
          username,
          password
        }
      )
      response = {
        status: responseData.status,
        lists: responseData.data
      }
    } catch (error) {
      const err = error.toJSON()
      if (err.message === 'Network Error') {
        response = {
          status: 500,
          error: err
        }
      } else {
        response = {
          status: error.response.status,
          error: error.response.data
        }
      }
    }
    return response
  },
  requestResetPassword: async (username, birthDate) => {
    let response = null
    try {
      const responseData = await axios.post(
        `${servicePath.service.general}/api/request_reset_password`,
        {
          username,
          birthDate
        }
      )
      response = {
        status: responseData.status,
        requestResetPassword: responseData.data
      }
    } catch (error) {
      const err = error.toJSON()
      if (err.message === 'Network Error') {
        response = {
          status: 500,
          error: err
        }
      } else {
        response = {
          status: error.response.status,
          error: error.response.data
        }
      }
    }
    return response
  },
  setPassword: async (username, password) => {
    let response = null
    try {
      const responseData = await axios.post(
        `${servicePath.service.general}/api/set_password`,
        {
          username,
          password
        }
      )
      response = {
        status: responseData.status,
        setPassword: responseData.data
      }
    } catch (error) {
      const err = error.toJSON()
      if (err.message === 'Network Error') {
        response = {
          status: 500,
          error: err
        }
      } else {
        response = {
          status: error.response.status,
          error: error.response.data
        }
      }
    }
    return response
  }
}

export default LoginService
