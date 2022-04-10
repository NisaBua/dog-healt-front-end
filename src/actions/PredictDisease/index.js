import {
  PREDICT_DISEASE_CLEAR_DATA,
  PREDICT_DISEASE_FAIL,
  PREDICT_DISEASE_SUCCESS
} from '../../redux/Constants/PredictDisease'

// Service
import predictDiseaseService from '../../services/PredictDisease'

// Utils
import handleResponse from '../../utils/Response'

const predictDiseaseAction = {
  PredictDisease: symptomData => async dispatch => {
    const response = await predictDiseaseService.GetPredictDisease(symptomData)
    if (response.status === 200) {
      handleResponse.Success({
        type: PREDICT_DISEASE_SUCCESS,
        dispatch,
        payload: response
      })
    } else {
      handleResponse.Error({
        type: PREDICT_DISEASE_FAIL,
        errorPage: true,
        dispatch,
        error: response.error
      })
    }
  },
  ClearPredictDisease: () => async dispatch => {
    // Clear data of example in Redux
    dispatch({
      type: PREDICT_DISEASE_CLEAR_DATA
    })
  }
}

export default predictDiseaseAction
