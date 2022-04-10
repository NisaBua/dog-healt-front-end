// Constants
import {
  GET_SYMPTOM_SUCCESS,
  GET_SYMPTOM_FAIL,
  GET_SYMPTOM_CLEAR_DATA
} from '../../../Constants/Symptom/Get'

const getSymptom = (state = {}, action) => {
  switch (action.type) {
    case GET_SYMPTOM_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case GET_SYMPTOM_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case GET_SYMPTOM_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default getSymptom
