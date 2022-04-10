// Constants
import {
  GET_CLASS_SYMPTOM_CLEAR_DATA,
  GET_CLASS_SYMPTOM_FAIL,
  GET_CLASS_SYMPTOM_SUCCESS
} from '../../../Constants/Symptom/GetClassSymptom'

const getClassSymptom = (state = {}, action) => {
  switch (action.type) {
    case GET_CLASS_SYMPTOM_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case GET_CLASS_SYMPTOM_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case GET_CLASS_SYMPTOM_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default getClassSymptom
