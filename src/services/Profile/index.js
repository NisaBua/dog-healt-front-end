import axios from 'axios'
import { servicePath } from '../../utils/config'
import token from 'utils/token'

const ProfileService = {
  GetProfile: async (username, password) => {
    let response = null
    let userToken = token.getToken()

    try {
      const responseData = await axios.get(
        `${servicePath.service.general}/api/get_profile`,
        {
          headers: {
            'user-token': userToken.token
          }
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
  }
}

export default ProfileService
