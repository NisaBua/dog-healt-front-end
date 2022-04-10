import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

//icon
import cancel from 'assets/Images/cancel.svg'
import check from 'assets/Images/check.svg'

import '../../../styles/Views/Home.scss'
import '../../../styles/Views/Home/Introduction.scss'

import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'

// Chakar ui
import {
  Box,
  Center,
  Heading,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'

import _ from 'lodash'

// Actions
import diseaseAction from '../../../actions/Disease'
import xxuLanguage from '../../../utils/Language'
import symptomAction from '../../../actions/Symptom'

function Summary(listSymptom) {
  const { t } = useTranslation(['common'])
  // const getDisease = useSelector(state => state.getDisease)
  // const getSymptom = useSelector(state => state.getSymptom)

  const lang = xxuLanguage.GetCurrentLanguage()

  // const [currentStep, setCurrentStep] = useState(0)
  return (
    <>
      <Heading fontSize="xl" pt={10} px={10}>
        {t('common:summary.title')}
      </Heading>
      <Box p={10} minH="300px" className="box-introduction">
        <Box>
          <Box marginTop="10px">
            <List spacing={3}>
              {listSymptom.listSymptom.length > 0
                ? listSymptom.listSymptom.map((item, index) => {
                    // return
                    return (
                      <ListItem
                        display="flex"
                        columnGap="8px"
                        key={`name-${index}`}
                      >
                        {item.status ? (
                          <img
                            alt="check"
                            width="16px"
                            heigh="16px"
                            src={check}
                          />
                        ) : (
                          <img
                            alt="cancel"
                            width="16px"
                            heigh="16px"
                            src={cancel}
                          />
                        )}{' '}
                        {lang === 'th'
                          ? item.symptom.symptomNameTH
                          : item.symptom.symptomNameEN}
                      </ListItem>
                    )
                  })
                : null}
            </List>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Summary
