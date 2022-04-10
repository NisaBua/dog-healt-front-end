// Constants
import {
  GET_DISEASE_SUCCESS,
  GET_DISEASE_FAIL,
  GET_DISEASE_CLEAR_DATA
} from '../../Constants/Disease'

const getDisease = (state = {}, action) => {
  switch (action.type) {
    case GET_DISEASE_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case GET_DISEASE_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case GET_DISEASE_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default getDisease
