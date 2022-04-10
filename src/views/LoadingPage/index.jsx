import React from 'react'
import { Center, Spinner } from '@chakra-ui/react'

import loadingImg from 'assets/Images/loading.svg'

function LoadingPageView() {
  return (
    <Center height="100vh">
      <img src={loadingImg} alt="" />
    </Center>
  )
}

export default LoadingPageView
