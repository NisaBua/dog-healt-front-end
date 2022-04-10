import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../../styles/Views/Home.scss'
import '../../../styles/Views/Home/termOfService.scss'

import term from '../../../assets/Images/term.svg'

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
  UnorderedList,
  ListItem,
  Stack,
  Checkbox
} from '@chakra-ui/react'

function TermOfService({ disableStep2, setDisableStep2 }) {
  const { t } = useTranslation(['common'])

  const [checkbox1, setCheckbox1] = useState(false)
  const [checkbox2, setCheckbox2] = useState(false)

  useEffect(() => {
    if (checkbox1 && checkbox2) {
      setDisableStep2(false)
      console.log('true')
    } else {
      setDisableStep2(true)
    }
  }, [checkbox1, checkbox2])

  return (
    <>
      <Box p={10} minH="480px" className="box-term">
        <Box w="80%" className="box-term-details">
          <Heading fontSize="lg">{t('common:termPage.title')}</Heading>
          <Box mt="30px">
            <Text>{t('common:termPage.description')}</Text>
          </Box>
          <Box mt="20px">
            <UnorderedList spacing='10px'>
              <ListItem>
                <Heading fontSize="md">
                  {t('common:termPage.one.title')}
                </Heading>
                {t('common:termPage.one.description')}
              </ListItem>
              <ListItem>
                <Heading fontSize="md">
                  {t('common:termPage.two.title')}
                </Heading>
                In
                {t('common:termPage.two.description')}
              </ListItem>
              <ListItem>
                <Heading fontSize="md">{t('common:termPage.three.title')}</Heading>
                {t('common:termPage.three.title')}
              </ListItem>
            </UnorderedList>
          </Box>
          <Box pl="20px" mt="20px">
            <Stack spacing="15px">
              <Checkbox
                onChange={e => {
                  setCheckbox1(e.target.checked)
                }}
                spacing="15px"
                colorScheme="teal"
              >
                {t('common:termPage.check1')}
              </Checkbox>
              <Checkbox
                onChange={e => {
                  setCheckbox2(e.target.checked)
                }}
                spacing="15px"
                colorScheme="teal"
              >
                {t('common:termPage.check2')}
              </Checkbox>
            </Stack>
          </Box>
        </Box>
        <Box>
          <Image loop="-1" width="400px" src={term} alt="" />
        </Box>
      </Box>
    </>
  )
}

export default TermOfService
