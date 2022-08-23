import React from 'react'
import Disease from 'views/Admin/Disease'
import Symptom from 'views/Admin/Symptom'
import { useTranslation } from 'react-i18next'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading
} from '@chakra-ui/react'

function AdminPage() {
  const { t } = useTranslation(['common'])

  return (
    <>
      <Tabs align="left" variant='enclosed' >
        <TabList>
          <Tab _selected={{ color: 'white', bg: 'blue.500'  }}>{t('common:admin:disease.name')}</Tab>
         
          <Tab _selected={{ color: 'white', bg: 'blue.500'   }}>{t('common:admin:symptom.name')}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel borderBottomRadius="30px" minH="500px" bg="#ffffff">
            <Disease />
          </TabPanel>
          <TabPanel borderBottomRadius="30px" minH="500px" bg="#ffffff">
            <Symptom />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default AdminPage
