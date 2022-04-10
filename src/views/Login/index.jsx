import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
  Link
} from '@chakra-ui/react'

function LoginPage() {
  const dispatch = useDispatch()

  const login = useSelector(state => state.login)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    dispatch(loginAction.Login(username, password))
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

  return (
    <Center mt="40px">
      <Box
        bg="#fff"
        padding={{ base: '10px 10px', sm: '20px 20px', md: '30px 40px' }}
        borderRadius="20px"
        minWidth={{ base: '320px', sm: '320px', md: '450px' }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Username</FormLabel>
          <Input
            onChange={e => {
              setUsername(e.target.value)
            }}
            value={username}
            id="username"
            type="text"
          />

          <FormLabel mt="20px" htmlFor="email">
            Password
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
              Login
            </Button>
          </Center>
          <Center mt="5px">
            <Link fontSize="sm" color="#1676D0" role="button">
              Forgot Password
            </Link>
          </Center>
        </FormControl>
      </Box>
    </Center>
  )
}

export default LoginPage
