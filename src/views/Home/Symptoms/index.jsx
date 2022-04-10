import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import '../../../styles/Step.css'
import '../../../styles/Views/Home.scss'
import '../../../styles/Views/Home/Introduction.scss'

// Chakar ui
import {
  Box,
  Center,
  Heading,
  Flex,
  Spacer,
  Text,
  Divider,
  HStack,
  Button,
  Select,
  CheckboxGroup,
  Checkbox,
  Wrap,
  WrapItem,
  Stack
} from '@chakra-ui/react'

// Actions
import diseaseAction from '../../../actions/Disease'
import xxuLanguage from '../../../utils/Language'
import symptomAction from '../../../actions/Symptom'

function Symptoms({ setSymtomOfDisease, symtomOfDisease }) {
  const dispatch = useDispatch()
  const { t } = useTranslation(['common'])

  const getDisease = useSelector(state => state.getDisease)
  const getSymptom = useSelector(state => state.getSymptom)
  const getClassSymptom = useSelector(state => state.getClassSymptom)

  // const [currentStep, setCurrentStep] = useState(0)

  const lang = xxuLanguage.GetCurrentLanguage()

  const handleSetSymtomOfDisease = symptomNumber => {
    let data = []
    symtomOfDisease.map(item => {
      data.push(item)
    })
    let newArray = getSymptom.lists.data.filter(item => {
      return (
        item.symptom_class_number ===
        getClassSymptom.lists.data[0].symptom_class_number
      )
    })

    const found = data.find(element => element === symptomNumber)
    if (found === undefined) {
      let check = 0

      newArray.map(item => {
        symtomOfDisease.map(itemNew => {
          if (item.symptomNumber === itemNew) {
            check += 1
          }
        })
      })

      newArray.map(item => {
        if (item.symptomNumber === symptomNumber) {
          check += 1
        }
      })
      if (check > 1) {
        Swal.fire('', 'Please select one age', 'warning')
        return
      } else {
        data.push(symptomNumber)
        setSymtomOfDisease(data)
      }
    } else {
      let newData = data.filter(item => {
        return item !== symptomNumber
      })
      setSymtomOfDisease(newData)
    }

    // console.log('found', found)
  }

  // useEffect(() => {
  //   const loadTodoLists = () => {
  //     dispatch(diseaseAction.GetDisease())
  //     dispatch(symptomAction.GetSymptom())
  //     dispatch(symptomAction.GetClassSymptom())
  //   }
  //   loadTodoLists()
  // }, [dispatch])

  return (
    <>
      <Box minH="480px" p={10}>
        <Heading fontSize="lg">Please select symptom</Heading>
        <Box mt="20px">
          <CheckboxGroup colorScheme="teal" value={symtomOfDisease}>
            {getSymptom.lists && getClassSymptom.lists
              ? getClassSymptom.lists.data.map((itemClass, index) => {
                  return (
                    <Box
                      key={`symptom_class_name-${itemClass.symptom_class_name}`}
                    >
                      <Stack mt="20px">
                        <Heading fontSize="md">
                          {lang === 'en'
                            ? itemClass.symptom_class_en
                            : itemClass.symptom_class_th}
                        </Heading>
                        <Wrap spacing="15px">
                          {getSymptom.lists.data.map(item => {
                            if (
                              itemClass.symptom_class_number ===
                              item.symptom_class_number
                            ) {
                              return (
                                <WrapItem
                                  key={`diseaseNumber-${item.symptomKey}`}
                                >
                                  <Checkbox
                                    onChange={e => {
                                      // console.log('123213', e.target.value)
                                      handleSetSymtomOfDisease(e.target.value)
                                    }}
                                    value={item.symptomNumber}
                                  >
                                    {lang === 'en'
                                      ? item.symptomNameEN
                                      : item.symptomNameTH}
                                  </Checkbox>
                                </WrapItem>
                              )
                            } else {
                              return null
                            }
                          })}
                        </Wrap>
                      </Stack>
                      {getClassSymptom.lists.data.length - 1 !== index ? (
                        <Box mt="20px">
                          <Divider />
                        </Box>
                      ) : null}
                    </Box>
                  )
                })
              : null}
          </CheckboxGroup>
        </Box>
      </Box>
    </>
  )
}

export default Symptoms
