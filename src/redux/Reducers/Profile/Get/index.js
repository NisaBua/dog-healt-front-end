// Constants
import {
  GET_PROFILE_CLEAR_DATA,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS
} from '../../../Constants/Profile/Get'

const getProfile = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case GET_PROFILE_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case GET_PROFILE_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default getProfile
