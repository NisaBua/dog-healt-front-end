import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import '../../styles/Step.css'
import '../../styles/Views/Home.scss'

// Chakar ui
import {
  Box,
  Flex,
  Spacer,
  Divider,
  Button
} from '@chakra-ui/react'
import Steps, { Step } from 'rc-steps'
// components
import Introduction from './Introduction'
import LoadingPage from '../../components/loadingPage'
import TermOfService from './TermOfService'
import Summary from './Summary'

// import Symptoms from './Symptoms'
import SelectSymptoms from './SelectSymptoms'
import Results from './Results'

// Actions
import diseaseAction from '../../actions/Disease'
import symptomAction from '../../actions/Symptom'
import getPredictDiseaseAction from '../../actions/GetPredictDisease'

function HomePage() {
  const dispatch = useDispatch()
  const { t } = useTranslation(['common'])
  //redux
  // const getSymptom = useSelector(state => state.getSymptom)
  const getPredictDisease = useSelector(state => state.getPredictDisease)

  //state
  const [currentStep, setCurrentStep] = useState(0)
  const [disableStep2, setDisableStep2] = useState(true)
  const [disease, setDisease] = useState(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [listSymptom, setListSymptom] = useState([])

  const handleResultDisease = () => {
    setLoading(true)
    dispatch(getPredictDiseaseAction.getPredictDisease(disease))
    // dispatch(predictDiseaseAction.PredictDisease(symtomOfDisease))
  }

  useEffect(() => {
    const loadTodoLists = () => {
      dispatch(diseaseAction.GetDisease())
      dispatch(symptomAction.GetSymptom())
      dispatch(symptomAction.GetFirstSymptom())
    }
    loadTodoLists()
  }, [dispatch])

  useEffect(() => {
    if (getPredictDisease.lists) {
      setLoading(false)
      setCurrentStep(currentStep + 1)
    }
  }, [getPredictDisease])

  return (
    <div>
      <Box className="box-home-body" alignItems="flex-start">
        <Box
          overflowX="auto"
          marginBottom="10px"
          paddingBottom="15px"
          className="step-mobile"
          w="100%"
        >
          <Steps labelPlacement="vertical" size="small" current={currentStep}>
            <Step title={t('common:step.introduction')} />
            <Step title={t('common:step.term of service')} />
            <Step title={t('common:step.symptoms')} />
            <Step title={t('common:step.summary')} />
            <Step title={t('common:step.results')} />
          </Steps>
        </Box>
        <Box className="step-pc" w="220px">
          <Steps current={currentStep} direction="vertical">
            <Step title={t('common:step.introduction')} />
            <Step title={t('common:step.term of service')} />
            <Step title={t('common:step.symptoms')} />
            <Step title={t('common:step.summary')} />
            <Step title={t('common:step.results')} />
          </Steps>
        </Box>
        <Box p={0} borderRadius="16px" minH="500px" w="100%" bgColor="#fff">
          {(() => {
            if (currentStep === 0) {
              return <Introduction />
            } else if (currentStep === 1) {
              return (
                <TermOfService
                  disableStep2={disableStep2}
                  setDisableStep2={setDisableStep2}
                />
              )
            } else if (currentStep === 2) {
              return (
                <SelectSymptoms
                  success={success}
                  setDisease={setDisease}
                  setSuccess={setSuccess}
                  listSymptom={listSymptom}
                  setListSymptom={setListSymptom}
                />
              )
            } else if (currentStep === 3) {
              return <Summary listSymptom={listSymptom} />
            } else {
              return <Results />
            }
          })()}
          <Divider />
          <Flex w="100%" p={10}>
            <Button
              display={currentStep === 0 ? 'none' : 'block'}
              onClick={() => {
                setCurrentStep(currentStep - 1)
                if (currentStep === 3 || currentStep === 2) {
                  setDisease(null)
                  setSuccess(false)
                  setListSymptom([])
                  dispatch(getPredictDiseaseAction.ClearPredictDisease())
                  dispatch(symptomAction.ClearGetNextSymptom())
                }
              }}
              justifySelf="flex-end"
              colorScheme="gray"
              textTransform="uppercase"
            >
              {currentStep === 2
                ? t('common:button.cancel')
                : t('common:button.back')}
            </Button>
            <Spacer />
            <Button
              onClick={() => {
                if (currentStep === 2) {
                  handleResultDisease()
                } else if (currentStep === 4) {
                  setCurrentStep(0)
                  setDisease(null)
                  setSuccess(false)
                  setListSymptom([])
                  dispatch(getPredictDiseaseAction.ClearPredictDisease())
                  dispatch(symptomAction.ClearGetNextSymptom())
                } else {
                  setCurrentStep(currentStep + 1)
                }
              }}
              disabled={
                currentStep === 1
                  ? disableStep2
                  : currentStep === 2 && success === false
                  ? true
                  : false
              }
              justifySelf="flex-end"
              colorScheme="blue"
              textTransform="uppercase"
            >
              {currentStep === 4
                ? t('common:button.finish')
                : t('common:button.next')}
            </Button>
          </Flex>
        </Box>
      </Box>
      <LoadingPage loading={loading} />
    </div>
  )
}

export default HomePage
