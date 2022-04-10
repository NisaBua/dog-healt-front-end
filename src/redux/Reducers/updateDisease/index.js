// Constants
import {
  UPDATE_DISEASE_CLEAR_DATA,
  UPDATE_DISEASE_FAIL,
  UPDATE_DISEASE_SUCCESS
} from '../../Constants/Disease'

const updateDisease = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_DISEASE_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_DISEASE_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_DISEASE_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default updateDisease