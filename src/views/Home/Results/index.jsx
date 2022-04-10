import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import '../../../styles/Step.css'
import '../../../styles/Views/Home.scss'
import '../../../styles/Views/Home/Introduction.scss'

import { PlusCircle } from 'react-feather'

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
  Image,
  Button,
  Badge
} from '@chakra-ui/react'

import xxuLanguage from '../../../utils/Language'

import dogResult from '../../../assets/Images/dog_result.png'

function Results() {
  const { t } = useTranslation(['common'])

  const getPredictDisease = useSelector(state => state.getPredictDisease)

  const lang = xxuLanguage.GetCurrentLanguage()

  // const [currentStep, setCurrentStep] = useState(0)
  return (
    <>
      <Box
        h="40px"
        bgColor="#1676D0"
        borderRadius="0 0 10px 10px"
        display="flex"
        alignItems="center"
      >
        <Box ml="10px">
          <PlusCircle color="#ffffff" />
        </Box>
      </Box>
      <Box minH="540px" p={10} pt="10px" position="relative">
        <Box>
          <Flex mt="20px" flexDirection="column" alignItems="center">
            <Heading fontSize="2xl">{t('common:result.title')}</Heading>
            <Flex
              flexDirection="column"
              alignItems="center"
              width="100%"
              mt="20px"
            >
              <Heading fontSize="xl">
              {t('common:result.subTitle')}
              </Heading>
              <Badge
                mt="20px"
                fontSize="1.8em"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="20px"
                w="100%"
                height="120px"
                colorScheme="linkedin"
              >
                {lang === 'en'
                  ? getPredictDisease.lists?.data[0].diseaseEN
                  : getPredictDisease.lists?.data[0].diseaseTH}
              </Badge>
            </Flex>
          </Flex>
          <Box mt="20px">
            <Heading fontSize="md">{t('common:result.symptom')}</Heading>
            <Text ml="10px" mt="10px">
              {lang === 'en'
                ? getPredictDisease.lists?.data[0].symptomDetailEN
                : getPredictDisease.lists?.data[0].symptomDetailTH}
            </Text>
          </Box>
          <Box mt="20px">
            <Heading fontSize="md">{t('common:result.guidelines')}</Heading>
            <Text ml="10px" mt="10px">
              {lang === 'en'
                ? getPredictDisease.lists?.data[0].treatmentGuidelinesEN
                : getPredictDisease.lists?.data[0].treatmentGuidelinesTH}
            </Text>
          </Box>
        </Box>
        <Box pr="10" position="absolute" bottom="0">
          <Image src={dogResult} />
        </Box>
      </Box>
    </>
  )
}

export default Results
