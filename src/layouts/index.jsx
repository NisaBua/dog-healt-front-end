import { Helmet, HelmetProvider } from 'react-helmet-async';
import token from 'utils/token'
// Chakar ui
import { Box } from '@chakra-ui/react'

// Components
import FullLayout from './Full'
import MainLayout from './Main'
import LoadingPage from '../views/LoadingPage'


const CoreLayout = ({ isAuth, layout, children }) => {
  let layoutComponent = <LoadingPage/>

  // route require authentication
  if (isAuth) {
    const userAuth = token.getToken()
    // check user authentication (Login)
    if (userAuth) {
      if (layout === 'main') {
        layoutComponent = <MainLayout>{children}</MainLayout>
      } else if (layout === 'full') {
        layoutComponent = <FullLayout>{children}</FullLayout>
      }
    } else {
      window.location.replace('/login')
    }
  } else if (layout === 'main') {
    layoutComponent = <MainLayout>{children}</MainLayout>
  } else if (layout === 'full') {
    layoutComponent = <FullLayout>{children}</FullLayout>
  }
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dogs Health Care</title>
      </Helmet>
      {layoutComponent}
    </HelmetProvider>
  )
}

export default CoreLayout
