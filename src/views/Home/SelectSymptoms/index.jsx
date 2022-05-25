import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import '../../../styles/Step.css'
import '../../../styles/Views/Home.scss'
import '../../../styles/Views/Home/Introduction.scss'

// Chakar ui
import {
  Box,
  Center,
  Heading,
  Flex,
  Text,
  Button,
  Badge,
  VStack,
  Spinner
} from '@chakra-ui/react'

// Actions
import xxuLanguage from '../../../utils/Language'
import symptomAction from '../../../actions/Symptom'

const Symptoms = ({
  success,
  setSuccess,
  setDisease,
  setListSymptom,
  listSymptom
}) => {
  const dispatch = useDispatch()
  const { t } = useTranslation(['common'])

  const [question, setQuestion] = useState(null)
  const [loading, setLoading] = useState(false)

  const getFirstSymptom = useSelector(state => state.getFirstSymptom)
  const getNextSymptom = useSelector(state => state.getNextSymptom)

  // const [currentStep, setCurrentStep] = useState(0)

  const lang = xxuLanguage.GetCurrentLanguage()

  const handleAddSymptom = (symptom, status) => {
    setLoading(true)
    let data = [...listSymptom]
    let value = { symptom: symptom, status: status }
    data.push(value)
    setListSymptom(data)
    dispatch(
      symptomAction.GetNextSymptom(symptom.predict_disease_number, status)
    )
  }
  const handleRemoveSymptom = () => {
    setLoading(true)
    let data = [...listSymptom]
    data.pop()
    setListSymptom(data)
    if (data.length > 0) {
      dispatch(symptomAction.ClearGetNextSymptom())
      dispatch(
        symptomAction.GetNextSymptom(
          data[data.length - 1].symptom.predict_disease_number,
          data[data.length - 1].status
        )
      )
    } else {
      dispatch(symptomAction.ClearGetNextSymptom())
      setQuestion(getFirstSymptom.lists.data[0])
    }
  }

  useEffect(() => {
    if (getFirstSymptom.lists) {
      setQuestion(getFirstSymptom.lists.data[0])
    }
  }, [getFirstSymptom])

  useEffect(() => {
    if (getNextSymptom.lists) {
      if (getNextSymptom.lists.data[0].predict_disease_result) {
        setSuccess(true)
        setDisease(getNextSymptom.lists.data[0].predict_disease_result)
      } else {
        setSuccess(false)
        setQuestion(getNextSymptom.lists.data[0])
      }
      setLoading(false)
    } else if (getNextSymptom.error) {
      setSuccess(false)
      setLoading(false)
    }
    if (!getNextSymptom.lists && listSymptom.length === 0) {
      console.log('getNextSymptom', getNextSymptom)
      if (getFirstSymptom.lists) {
        setLoading(false)
      }
    }
  }, [getNextSymptom])

  return (
    <>
      <Box minH="480px" p={10} position="relative">
        <Heading fontSize="lg">{t('common:selectPage.title')}</Heading>
        <Center mt="40px">
          <VStack width="-webkit-fill-available" gridGap="30px">
            <Box
              display={loading ? 'flex' : 'none'}
              justifyContent="center"
              alignItems="center"
              height="206px"
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Box>
            {loading ? null : success === false ? (
              <>
                <Flex position="relative" w="100%">
                  <Badge
                    mt="20px"
                    w="100%"
                    minH="100px"
                    borderRadius="8px"
                    textAlign="center"
                    variant="solid"
                    padding="8px 20px"
                    fontSize="lg"
                    color="#666"
                    // colorScheme="twitter"
                    backgroundColor="#f2f5f7"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    textTransform="none"
                    whiteSpace="unset"
                  >
                    {question
                      ? lang === 'th'
                        ? question.question_TH
                        : question.question_EN
                      : null}{' '}
                    ?
                  </Badge>
                </Flex>

                <Flex gridGap="20px">
                  <Button
                    onClick={() => handleAddSymptom(question, false)}
                    w="120px"
                    size="md"
                  >
                    {t('common:selectPage.no')}
                  </Button>
                  <Button
                    onClick={() => handleAddSymptom(question, true)}
                    w="120px"
                    size="md"
                    colorScheme="green"
                  >
                    {t('common:selectPage.yes')}
                  </Button>
                </Flex>
                <Box
                  display="flex"
                  px={10}
                  pb={2}
                  right="0"
                  bottom="0"
                  position="absolute"
                  alignItems="flex-end"
                >
                  {listSymptom.length > 0 ? (
                    <Box
                      onClick={handleRemoveSymptom}
                      role="button"
                      _hover={{ opacity: '0.6' }}
                      display="flex"
                    >
                      <img width="18px" src="/images/back.svg" alt="" />{' '}
                      {t('common:selectPage.previous')}
                    </Box>
                  ) : null}
                </Box>
              </>
            ) : (
              <>
                <Flex
                  // position="relative"
                  flexDirection="column"
                  alignItems="center"
                  rowGap="30px"
                  width="100%"
                >
                  {/* <Text
                    onClick={handleRemoveSymptom}
                    top="-10px"
                    role="button"
                    _hover={{ opacity: '0.6' }}
                    left="0"
                    position="absolute"
                  >
                    〱 {t('common:selectPage.previous')}
                  </Text> */}
                  <Badge
                    mt="20px"
                    w="100%"
                    minH="100px"
                    borderRadius="8px"
                    textAlign="center"
                    // variant="solid"
                    padding="8px 20px"
                    fontSize="lg"
                    colorScheme="green"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    variant="outline"
                  >
                    {t('common:selectPage.success')}
                  </Badge>
                  <Text>
                    {t('common:selectPage.success detail')}{' '}
                    <span style={{ color: '#1676D0', fontWeight: '600' }}>
                      {t('common:selectPage.next')}
                    </span>{' '}
                    {t('common:selectPage.result')}
                  </Text>
                  <Box
                    display="flex"
                    px={10}
                    pb={2}
                    right="0"
                    bottom="0"
                    position="absolute"
                    alignItems="flex-end"
                  >
                    <Box
                      onClick={handleRemoveSymptom}
                      role="button"
                      _hover={{ opacity: '0.6' }}
                      display="flex"
                    >
                      <img width="18px" src="/images/back.svg" alt="" />{' '}
                      {t('common:selectPage.previous')}
                    </Box>
                  </Box>
                </Flex>
              </>
            )}
          </VStack>
        </Center>
      </Box>
    </>
  )
}

export default Symptoms
