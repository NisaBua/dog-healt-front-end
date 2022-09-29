import { combineReducers } from 'redux'

import todo from './Todo'
import post from './Post'
import getDisease from './Disease'
import getSymptom from './Symptom/Get'
import getClassSymptom from './Symptom/GetClassSymptom'
import getFirstSymptom from './Symptom/GetFirstSymptom'
import predictDisease from './PredictDisease'
import getNextSymptom from './Symptom/GetNextSymptom'
import getPredictDisease from './GetPredictDisease'
import login from './Login'
import getProfile from './Profile/Get'
import setProfile from './Profile/Set'
import updateSymptom from './Symptom/Update'
import updateDisease from './updateDisease'
import requestResetPassword from './Password/Request'
import setPassword from './Password/Set'

export default combineReducers({
    post,
    todo,
    getDisease,
    getSymptom,
    getClassSymptom,
    predictDisease,
    getFirstSymptom,
    getNextSymptom,
    getPredictDisease,
    login,
    getProfile,
    setProfile,
    updateSymptom,
    updateDisease,
    setPassword,
    requestResetPassword
})