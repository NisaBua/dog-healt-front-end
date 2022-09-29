import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import addAdmin from '../../services/AddAdmin'
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
import handleResponse from 'utils/Response'
import Swal from 'sweetalert2'

function AddAdmin() {
  const { t } = useTranslation(['common'])

  const [nameTitle, setNameTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async () => {
    let data = { nameTitle, firstName, lastName, birthDate, username, password }
    const response = await addAdmin.addAdmin(data)
    if (response.lists.success) {
      Swal.fire('', response.lists.message, 'success').then(() => {
        window.location.href = '/admin'
      })
    } else {
      Swal.fire('', response.lists.message, 'error').then(() => {})
    }
  }

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
            {t('common:addAdmin.nametitle')}
          </FormLabel>
          <Input
            type="text"
            value={nameTitle}
            onChange={e => setNameTitle(e.target.value)}
            placeholder={t('common:addAdmin.nametitle')}
          />

          <FormLabel mt="20px" htmlFor="email">
            {t('common:addAdmin.firstname')}
          </FormLabel>
          <Input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder={t('common:addAdmin.firstname')}
          />

          <FormLabel mt="20px" htmlFor="email">
            {t('common:addAdmin.lastname')}
          </FormLabel>
          <Input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder={t('common:addAdmin.lastname')}
          />

          <FormLabel mt="20px" htmlFor="email">
            {t('common:addAdmin.birth date')}
          </FormLabel>
          <Input
            value={birthDate}
            onChange={e => {
              setBirthDate(e.target.value)
            }}
            type="date"
          />

          <FormLabel mt="20px">{t('common:addAdmin.username')}</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder={t('common:addAdmin.username')}
          />

          <FormLabel mt="20px">{t('common:addAdmin.password')}</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={t('common:addAdmin.password')}
          />

          <Center>
            <Stack
              direction="row"
              spacing={4}
              align="center"
              mt="20px"
              htmlFor="email"
            >
              <Button colorScheme="blue" variant="solid" onClick={handleSubmit}>
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
