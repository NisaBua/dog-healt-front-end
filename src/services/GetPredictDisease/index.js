import axios from 'axios'
import { servicePath } from '../../utils/config'

const getPredictDiseaseService = {
  GetPredictDisease: async diseaseNumber => {
    let response = null

    try {
      const responseData = await axios.post(
        `${servicePath.service.general}/api/get_predict_disease`,
        {
          disease_number: diseaseNumber
        }
      )
      response = {
        status: responseData.status,
        lists: responseData.data
      }
    } catch (error) {
      const err = error.toJSON()
      if (err.message === 'Network Error') {
        response = {
          status: 500,
          error: err
        }
      } else {
        response = {
          status: error.response.status,
          error: error.response.data
        }
      }
    }
    return response
  }
}

export default getPredictDiseaseService
