// Constants
import {
  PREDICT_DISEASE_CLEAR_DATA,
  PREDICT_DISEASE_FAIL,
  PREDICT_DISEASE_SUCCESS
} from '../../Constants/PredictDisease'

const predictDisease = (state = {}, action) => {
  switch (action.type) {
    case PREDICT_DISEASE_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case PREDICT_DISEASE_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case PREDICT_DISEASE_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default predictDisease
