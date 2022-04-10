import {
  GET_DISEASE_SUCCESS,
  GET_DISEASE_FAIL,
  GET_DISEASE_CLEAR_DATA,
  UPDATE_DISEASE_SUCCESS,
  UPDATE_DISEASE_FAIL,
  UPDATE_DISEASE_CLEAR_DATA
} from '../../redux/Constants/Disease'

// Service
import diseaseService from '../../services/Disease'

// Utils
import handleResponse from '../../utils/Response'

const diseaseAction = {
  GetDisease: () => async (dispatch, getState) => {
    const response = await diseaseService.GetDisease()
    if (response.status === 200) {
      handleResponse.Success({
        type: GET_DISEASE_SUCCESS,
        dispatch,
        payload: response
      })
    } else {
      handleResponse.Error({
        type: GET_DISEASE_FAIL,
        errorPage: true,
        dispatch,
        error: response.error
      })
    }
  },
  ClearDisease: () => async dispatch => {
    // Clear data of example in Redux
    dispatch({
      type: GET_DISEASE_CLEAR_DATA
    })
  },
  UpdateDisease:
    (
      diseaseEN,
      diseaseTH,
      treatmentGuidelinesEN,
      treatmentGuidelinesTH,
      symptomDetailEN,
      symptomDetailTH,
      diseaseNumber
    ) =>
    async dispatch => {
      const response = await diseaseService.UpdateSymptom(
        diseaseEN,
        diseaseTH,
        treatmentGuidelinesEN,
        treatmentGuidelinesTH,
        symptomDetailEN,
        symptomDetailTH,
        diseaseNumber
      )
      if (response.status === 200) {
        handleResponse.Success({
          type: UPDATE_DISEASE_SUCCESS,
          dispatch,
          payload: response
        })
      } else {
        handleResponse.Error({
          type: UPDATE_DISEASE_FAIL,
          errorPage: true,
          dispatch,
          error: response.error
        })
      }
    },
  ClearUpdateDisease: () => async dispatch => {
    // Clear data of example in Redux
    dispatch({
      type: UPDATE_DISEASE_CLEAR_DATA
    })
  }
}

export default diseaseAction
