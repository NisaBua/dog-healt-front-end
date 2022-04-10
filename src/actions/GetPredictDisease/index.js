import {
  GET_PREDICT_DISEASE_CLEAR_DATA,
  GET_PREDICT_DISEASE_FAIL,
  GET_PREDICT_DISEASE_SUCCESS
} from '../../redux/Constants/GetPredictDisease'

// Service
import getPredictDiseaseService from '../../services/GetPredictDisease'

// Utils
import handleResponse from '../../utils/Response'

const getPredictDiseaseAction = {
  getPredictDisease: diseaseNumber => async dispatch => {
    const response = await getPredictDiseaseService.GetPredictDisease(
      diseaseNumber
    )
    if (response.status === 200) {
      handleResponse.Success({
        type: GET_PREDICT_DISEASE_SUCCESS,
        dispatch,
        payload: response
      })
    } else {
      handleResponse.Error({
        type: GET_PREDICT_DISEASE_FAIL,
        errorPage: true,
        dispatch,
        error: response.error
      })
    }
  },
  ClearPredictDisease: () => async dispatch => {
    dispatch({
      type: GET_PREDICT_DISEASE_CLEAR_DATA
    })
  }
}

export default getPredictDiseaseAction
