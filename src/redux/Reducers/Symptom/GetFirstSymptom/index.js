// Constants
import {
  GET_FIRST_SYMPTOM_CLEAR_DATA,
  GET_FIRST_SYMPTOM_FAIL,
  GET_FIRST_SYMPTOM_SUCCESS
} from '../../../Constants/Symptom/GetFirstSymptom'

const getFirstSymptom = (state = {}, action) => {
  switch (action.type) {
    case GET_FIRST_SYMPTOM_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case GET_FIRST_SYMPTOM_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case GET_FIRST_SYMPTOM_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default getFirstSymptom
