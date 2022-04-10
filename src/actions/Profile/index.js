import {
  GET_PROFILE_CLEAR_DATA,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS
} from '../../redux/Constants/Profile/Get'

// Service
import ProfileService from '../../services/Profile'

// Utils
import handleResponse from '../../utils/Response'

const profileAction = {
  GetProfile: () => async (dispatch, getState) => {
    const response = await ProfileService.GetProfile()
    if (response.status === 200) {
      handleResponse.Success({
        type: GET_PROFILE_SUCCESS,
        dispatch,
        payload: response
      })
    } else {
      handleResponse.Error({
        type: GET_PROFILE_FAIL,
        errorPage: true,
        dispatch,
        error: response.error
      })
    }
  },
  ClearGetProfile: () => async dispatch => {
    dispatch({
      type: GET_PROFILE_CLEAR_DATA
    })
  }
}

export default profileAction
