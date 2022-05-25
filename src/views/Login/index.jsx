import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import loginAction from '../../actions/Login'
import Swal from 'sweetalert2'

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
  useDisclosure
} from '@chakra-ui/react'

function LoginPage() {
  const dispatch = useDispatch()
  const { t } = useTranslation(['common'])

  const login = useSelector(state => state.login)
  const requestResetPassword = useSelector(state => state.requestResetPassword)
  const setPasswordRedux = useSelector(state => state.setPassword)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameReset, setUsernameReset] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [loadingButton, setLoadingButton] = useState(false)
  const [passwordReset, setPasswordReset] = useState('')
  const [confirmPasswordReset, setConfirmPasswordReset] = useState('')

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleLogin = () => {
    dispatch(loginAction.Login(username, password))
  }
  const handleRequestResetPassword = () => {
    dispatch(loginAction.RequestResetPassword(usernameReset, birthDate))
    setLoadingButton(true)
  }
  const handleSetPassword = () => {
    dispatch(loginAction.setPassword(usernameReset, passwordReset))
    setLoadingButton(true)
  }
  const onHideModal = () => {
    onClose()
    setUsername('')
    setPassword('')
    setUsernameReset('')
    setBirthDate('')
    setLoadingButton(false)
    setPasswordReset('')
    setConfirmPasswordReset('')
    dispatch(loginAction.ClearRequestResetPassword())
    dispatch(loginAction.ClearSetPassword())
  }

  useEffect(() => {
    if (login.error) {
      dispatch(loginAction.ClearLogin())
      Swal.fire('', login.error.data.message, 'error')
    } else if (login.data) {
      window.localStorage.setItem('userToken', JSON.stringify(login.data))
      Swal.fire('', login.message, 'success').then(() => {
        window.location.href = '/admin'
      })
    } else if (login.data === null) {
      dispatch(loginAction.ClearLogin())
      Swal.fire('', login.message, 'error')
    }
  }, [login])

  useEffect(() => {
    if (requestResetPassword.success) {
      setLoadingButton(false)
    } else if (requestResetPassword.success === false) {
      Swal.fire('', requestResetPassword.message, 'error').then(() => {
        setLoadingButton(false)
        dispatch(loginAction.ClearRequestResetPassword())
      })
    }
  }, [requestResetPassword])

  useEffect(() => {
    if (setPasswordRedux.success) {
      setLoadingButton(false)
      Swal.fire('', setPasswordRedux.message, 'success').then(() => {
        onHideModal()
      })
    }
  }, [setPasswordRedux])

  return (
    <Center mt="40px">
      <Box
        bg="#fff"
        padding={{ base: '10px 10px', sm: '20px 20px', md: '30px 40px' }}
        borderRadius="20px"
        minWidth={{ base: '320px', sm: '320px', md: '450px' }}
      >
        <FormControl>
          <FormLabel htmlFor="email">{t('common:login.username')}</FormLabel>
          <Input
            onChange={e => {
              setUsername(e.target.value)
            }}
            value={username}
            id="username"
            type="text"
          />

          <FormLabel mt="20px" htmlFor="email">
            {t('common:login.password')}
          </FormLabel>
          <Input
            value={password}
            onChange={e => {
              setPassword(e.target.value)
            }}
            id="password"
            type="password"
          />
          <Center>
            <Button
              disabled={!username || !password}
              onClick={handleLogin}
              colorScheme="blue"
              mt="20px"
              w="80%"
            >
              {t('common:menu.login')}
            </Button>
          </Center>
          <Center mt="5px">
            <Link onClick={onOpen} fontSize="sm" color="#1676D0" role="button">
            {t('common:login.forgot')}
            </Link>
          </Center>
        </FormControl>
      </Box>
      <Modal isOpen={isOpen} onClose={onHideModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('common:login.forgot')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {requestResetPassword.success ? (
              <>
                <FormLabel htmlFor="email">{t('common:login.password')}</FormLabel>
                <Input
                  onChange={e => {
                    setPasswordReset(e.target.value)
                  }}
                  value={passwordReset}
                  id="username"
                  type="password"
                />

                <FormLabel htmlFor="email">{t('common:login.confirm')}</FormLabel>
                <Input
                  onChange={e => {
                    setConfirmPasswordReset(e.target.value)
                  }}
                  value={confirmPasswordReset}
                  id="username"
                  type="password"
                />

                <Center>
                  <Button
                    isLoading={loadingButton}
                    disabled={
                      !passwordReset || !confirmPasswordReset
                        ? true
                        : passwordReset !== confirmPasswordReset
                        ? true
                        : false
                    }
                    onClick={handleSetPassword}
                    colorScheme="blue"
                    mt="20px"
                    w="80%"
                  >
                    {t('common:login.reset')}
                  </Button>
                </Center>
              </>
            ) : (
              <>
                <FormLabel htmlFor="email">{t('common:login.username')}</FormLabel>
                <Input
                  onChange={e => {
                    setUsernameReset(e.target.value)
                  }}
                  value={usernameReset}
                  id="username"
                  type="text"
                />

                <FormLabel mt="20px" htmlFor="email">
                {t('common:login.birth date')}
                </FormLabel>
                <Input
                  value={birthDate}
                  onChange={e => {
                    setBirthDate(e.target.value)
                  }}
                  id="password"
                  type="date"
                />
                <Center>
                  <Button
                    isLoading={loadingButton}
                    disabled={!usernameReset || !birthDate || loadingButton}
                    onClick={handleRequestResetPassword}
                    colorScheme="blue"
                    mt="20px"
                    w="80%"
                  >
                    {t('common:login.forgot')}
                  </Button>
                </Center>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  )
}

export default LoginPage
