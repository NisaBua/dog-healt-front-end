import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Center,
  Input,
  Box,
  Button,
  Link,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Spacer,
  Stack
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import LoadingPage from 'components/loadingPage'

function AddAdmin() {
  const { t } = useTranslation(['common'])

  const [nametitle, setNameTitle] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Center mt="10px">
      <Box
        bg="#fff"
        padding={{ base: '10px 10px', sm: '20px 20px', md: '30px 40px' }}
        borderRadius="20px"
        minWidth={{ base: '320px', sm: '320px', md: '450px' }}
      >
        <FormControl>
          <FormLabel htmlFor="email">
            {t('common:addAdmin.firstname')}
          </FormLabel>
          <Input placeholder={t('common:addAdmin.firstname')} />

          <FormLabel mt="20px" htmlFor="email">
            {t('common:addAdmin.lastname')}
          </FormLabel>
          <Input placeholder={t('common:addAdmin.lastname')} />

          <FormLabel mt="20px" htmlFor="email">
            {t('common:addAdmin.birth date')}
          </FormLabel>
          <Input
            value={birthDate}
            onChange={e => {
              setBirthDate(e.target.value)
            }}
            id="password"
            type="date"
          />

          <FormLabel mt="20px">{t('common:addAdmin.username')}</FormLabel>
          <Input placeholder={t('common:addAdmin.username')} />

          <FormLabel mt="20px">{t('common:addAdmin.password')}</FormLabel>
          <Input placeholder={t('common:addAdmin.password')} />

          <Center>
            <Stack
              direction="row"
              spacing={4}
              align="center"
              mt="20px"
              htmlFor="email"
            >
              <Button colorScheme="blue" variant="solid">
                {t('common:addAdmin.save')}
              </Button>

              <Button colorScheme="bule" variant="outline">
                {t('common:addAdmin.cancel')}
              </Button>
            </Stack>
          </Center>
        </FormControl>
      </Box>
    </Center>
  )
}

export default AddAdmin
