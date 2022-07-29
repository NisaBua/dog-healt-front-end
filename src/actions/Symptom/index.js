import {
    GET_SYMPTOM_CLEAR_DATA,
    GET_SYMPTOM_FAIL,
    GET_SYMPTOM_SUCCESS
} from '../../redux/Constants/Symptom/Get'

import {
    UPDATE_SYMPTOM_CLEAR_DATA,
    UPDATE_SYMPTOM_FAIL,
    UPDATE_SYMPTOM_SUCCESS
} from '../../redux/Constants/Symptom/Update'

import {
    GET_FIRST_SYMPTOM_CLEAR_DATA,
    GET_FIRST_SYMPTOM_FAIL,
    GET_FIRST_SYMPTOM_SUCCESS
} from '../../redux/Constants/Symptom/GetFirstSymptom'

import {
    GET_NEXT_SYMPTOM_CLEAR_DATA,
    GET_NEXT_SYMPTOM_FAIL,
    GET_NEXT_SYMPTOM_SUCCESS
} from '../../redux/Constants/Symptom/GetNextSymptom'

// Service
import symptomService from '../../services/Symptom'

// Utils
import handleResponse from '../../utils/Response'

const symptomAction = {
    GetSymptom: () => async(dispatch, getState) => {
        const response = await symptomService.GetSymptom()
        if (response.status === 200) {
            handleResponse.Success({
                type: GET_SYMPTOM_SUCCESS,
                dispatch,
                payload: response
            })
        } else {
            handleResponse.Error({
                type: GET_SYMPTOM_FAIL,
                errorPage: true,
                dispatch,
                error: response.error
            })
        }
    },
    ClearGetSymptom: () => async dispatch => {
        // Clear data of example in Redux
        dispatch({
            type: GET_SYMPTOM_CLEAR_DATA
        })
    },
    UpdateSymptom:
        (question_TH, question_EN, symptomNameEN, symptomNameTH, symptomNumber, detailEN, detailTH) =>
        async dispatch => {
            const response = await symptomService.UpdateSymptom(
                question_TH,
                question_EN,
                symptomNameEN,
                symptomNameTH,
                symptomNumber,
                detailEN,
                detailTH
            )
            if (response.status === 200) {
                handleResponse.Success({
                    type: UPDATE_SYMPTOM_SUCCESS,
                    dispatch,
                    payload: response
                })
            } else {
                handleResponse.Error({
                    type: UPDATE_SYMPTOM_FAIL,
                    errorPage: true,
                    dispatch,
                    error: response.error
                })
            }
        },
    ClearUpdateSymptom: () => async dispatch => {
        // Clear data of example in Redux
        dispatch({
            type: UPDATE_SYMPTOM_CLEAR_DATA
        })
    },
    GetFirstSymptom: () => async(dispatch, getState) => {
        dispatch({
            type: GET_FIRST_SYMPTOM_CLEAR_DATA
        })
        const response = await symptomService.GetFirstSymptom()
        if (response.status === 200) {
            handleResponse.Success({
                type: GET_FIRST_SYMPTOM_SUCCESS,
                dispatch,
                payload: response
            })
        } else {
            handleResponse.Error({
                type: GET_FIRST_SYMPTOM_FAIL,
                errorPage: true,
                dispatch,
                error: response.error
            })
        }
    },
    GetNextSymptom:
        (previousSymptom, previousStatus) => async(dispatch, getState) => {
            dispatch({
                type: GET_NEXT_SYMPTOM_CLEAR_DATA
            })
            const response = await symptomService.GetNextSymptom(
                previousSymptom,
                previousStatus
            )
            if (response.status === 200) {
                handleResponse.Success({
                    type: GET_NEXT_SYMPTOM_SUCCESS,
                    dispatch,
                    payload: response
                })
            } else {
                handleResponse.Error({
                    type: GET_NEXT_SYMPTOM_FAIL,
                    errorPage: true,
                    dispatch,
                    error: response.error
                })
            }
        },
    ClearGetNextSymptom: () => async dispatch => {
        // Clear data of example in Redux
        dispatch({
            type: GET_NEXT_SYMPTOM_CLEAR_DATA
        })
    }
}

export default symptomAction