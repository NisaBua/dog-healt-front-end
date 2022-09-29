import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

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
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@chakra-ui/react'

//utile

import token from 'utils/token'

// Logo
import logo from '../../assets/Images/dog_4.png'
import xxuLanguage from '../../utils/Language'

import xxaProfile from '../../actions/Profile'

const MainLayout = ({ children }) => {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation(['common'])

  const lang = xxuLanguage.GetCurrentLanguage()

  const getProfile = useSelector(state => state.getProfile)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleChangeLanguage = lg => {
    // xxuLanguage.SetCurrentLanguage(lg)
    i18n.changeLanguage(lg)
  }

  const checkCurrentLang = current => {
    if (lang === current) {
      return true
    } else {
      return false
    }
  }

  const handleLogout = () => {
    dispatch(xxaProfile.ClearGetProfile())
    window.localStorage.removeItem('userToken')
    window.location.href = '/login'
  }

  const handleHome = () => {
    window.location.href = '/'
  }

  const handleAdmin = () => {
    window.location.href = '/admin'
  }

  const handleAddAdmin = () => {
    window.location.href = '/AddAdmin'
  }

  useEffect(() => {
    let userToken = token.getToken()
    if (userToken) {
      dispatch(xxaProfile.GetProfile())
    }
  }, [])

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        backgroundColor="#1676D0"
        height="80px"
        className="box-content-padding"
      >
        <Flex w="100%">
          <Box display="flex" alignItems="center">
            <Image role="button" onClick={handleHome} width="60px" src={logo} />
            <Heading
              ml="10px"
              onClick={handleHome}
              role="button"
              color="#fffFFF"
              fontSize="md"
            >
              DOGS HEALTH CARE
            </Heading>
          </Box>
          <Spacer />
          <HStack>
            <Text
              onClick={() => {
                handleChangeLanguage('th')
              }}
              cursor="pointer"
              color="#fff"
              _hover={{
                textDecoration: 'underline'
              }}
              textDecoration={checkCurrentLang('th') ? 'underline' : 'unset'}
            >
              TH
            </Text>
            <Divider h="20px" color="#fff" orientation="vertical" />
            <Text
              onClick={() => {
                handleChangeLanguage('en')
              }}
              cursor="pointer"
              color="#fff"
              _hover={{
                textDecoration: 'underline'
              }}
              textDecoration={checkCurrentLang('en') ? 'underline' : 'unset'}
            >
              EN
            </Text>
            <a
              href="/คู่มือการใช้งาน.pdf"
              download={true}
              className="link-download"
            >
              {t('common:menu.operatingInstructions.')}
            </a>
          </HStack>

          <Center ml="10px">
            {getProfile.lists ? (
              <Menu>
                <MenuButton fontSize="0.8em" role="button" as={Badge}>
                  {getProfile.lists.data.firstName}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleAdmin}>
                    {t('common:menu.admin')}
                  </MenuItem>
                  <MenuItem onClick={handleAddAdmin}>
                    {t('common:menu.addAdmin')}
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    {t('common:menu.logout')}
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link
                onClick={() => {
                  window.location.href = '/login'
                }}
                color="#ffffff"
              >
                {t('common:menu.login')}
              </Link>
            )}
          </Center>
        </Flex>
      </Box>
      <Box
        minHeight="calc(100vh - 80px)"
        py="40px"
        className="box-content-padding"
      >
        {children}
      </Box>
      {/* Main Layout */}
    </Box>
  )
}

export default MainLayout
