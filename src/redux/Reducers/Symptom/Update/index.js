// Constants
import {
  UPDATE_SYMPTOM_SUCCESS,
  UPDATE_SYMPTOM_FAIL,
  UPDATE_SYMPTOM_CLEAR_DATA
} from '../../../Constants/Symptom/Update'

const updateSymptom = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SYMPTOM_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_SYMPTOM_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_SYMPTOM_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default updateSymptom
