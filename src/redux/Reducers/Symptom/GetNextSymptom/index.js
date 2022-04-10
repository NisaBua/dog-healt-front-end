// Constants
import {
  GET_NEXT_SYMPTOM_CLEAR_DATA,
  GET_NEXT_SYMPTOM_FAIL,
  GET_NEXT_SYMPTOM_SUCCESS
} from '../../../Constants/Symptom/GetNextSymptom'

const getNextSymptom = (state = {}, action) => {
  switch (action.type) {
    case GET_NEXT_SYMPTOM_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case GET_NEXT_SYMPTOM_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case GET_NEXT_SYMPTOM_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default getNextSymptom
