// Constants
import {
  SET_SYMPTOM_SUCCESS,
  SET_SYMPTOM_FAIL,
  SET_SYMPTOM_CLEAR_DATA
} from '../../../Constants/Symptom/Set'

const setSymptom = (state = {}, action) => {
  switch (action.type) {
    case SET_SYMPTOM_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case SET_SYMPTOM_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case SET_SYMPTOM_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default setSymptom
