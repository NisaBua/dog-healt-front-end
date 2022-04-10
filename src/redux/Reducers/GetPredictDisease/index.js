// Constants
import {
  GET_PREDICT_DISEASE_CLEAR_DATA,
  GET_PREDICT_DISEASE_FAIL,
  GET_PREDICT_DISEASE_SUCCESS
} from '../../Constants/GetPredictDisease'

const getPredictDisease = (state = {}, action) => {
  switch (action.type) {
    case GET_PREDICT_DISEASE_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case GET_PREDICT_DISEASE_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case GET_PREDICT_DISEASE_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default getPredictDisease
