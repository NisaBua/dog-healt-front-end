// Constants
import {
  SET_PROFILE_CLEAR_DATA,
  SET_PROFILE_FAIL,
  SET_PROFILE_SUCCESS
} from '../../../Constants/Profile/Set'

const setProfile = (state = {}, action) => {
  switch (action.type) {
    case SET_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case SET_PROFILE_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case SET_PROFILE_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default setProfile
