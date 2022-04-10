import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'
import LoadingPage from 'components/loadingPage'

import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

import diseaseAction from 'actions/Disease'

function Disease() {
  const dispatch = useDispatch()

  const { t } = useTranslation(['common'])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [diseaseEN, setDiseaseEN] = useState('')
  const [diseaseTH, setDiseaseTH] = useState('')
  const [symptomDetailEN, setSymptomDetailEN] = useState('')
  const [symptomDetailTH, setSymptomDetailTH] = useState('')
  const [treatmentGuidelinesEN, setTreatmentGuidelinesEN] = useState('')
  const [treatmentGuidelinesTH, setTreatmentGuidelinesTH] = useState('')
  const [diseaseNumber, setDiseaseNumber] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [enableButton, setEnableButton] = useState(false)

  const getDisease = useSelector(state => state.getDisease)
  const updateDisease = useSelector(state => state.updateDisease)

  const handleEdit = disease => {
    onOpen()
    setDiseaseEN(disease.diseaseEN)
    setDiseaseTH(disease.diseaseTH)
    setSymptomDetailEN(disease.symptomDetailEN)
    setSymptomDetailTH(disease.symptomDetailTH)
    setTreatmentGuidelinesEN(disease.treatmentGuidelinesEN)
    setTreatmentGuidelinesTH(disease.treatmentGuidelinesTH)
    setDiseaseNumber(disease.diseaseNumber)
  }

  const handleUpdateDisease = () => {
    setIsLoading(true)
    dispatch(
      diseaseAction.UpdateDisease(
        diseaseEN,
        diseaseTH,
        treatmentGuidelinesEN,
        treatmentGuidelinesTH,
        symptomDetailEN,
        symptomDetailTH,
        diseaseNumber
      )
    )
  }

  useEffect(() => {
    if (updateDisease.lists?.success) {
      onClose()
      setIsLoading(false)
      dispatch(diseaseAction.GetDisease())
      // dispatch(diseaseAction.ClearUpdateDisease())
      Swal.fire('', updateDisease.lists.message, 'success')
    } else if (updateDisease.lists?.data === null) {
      Swal.fire('', updateDisease.lists.message, 'error')
    }
  }, [updateDisease])

  useEffect(() => {
    dispatch(diseaseAction.GetDisease())
  }, [dispatch])

  useEffect(() => {
    if (
      !diseaseEN ||
      !diseaseTH ||
      !treatmentGuidelinesEN ||
      !treatmentGuidelinesTH ||
      !symptomDetailEN ||
      !symptomDetailTH ||
      !diseaseNumber
    ) {
      setEnableButton(true)
    } else {
      setEnableButton(false)
    }
  }, [
    diseaseEN,
    diseaseTH,
    treatmentGuidelinesEN,
    treatmentGuidelinesTH,
    symptomDetailEN,
    symptomDetailTH,
    diseaseNumber
  ])

  return (
    <>
      <Table variant="simple">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            <Th></Th>
            <Th>{t('common:admin.disease.diseaseEN')}</Th>
            <Th>{t('common:admin.disease.diseaseTH')}</Th>
            <Th></Th>
            {/* <Th>Treatment guidelines english</Th>
            <Th>Treatment guidelines thai</Th>
            <Th>Symptom detail english</Th>
            <Th>Symptom detail thai</Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {getDisease.lists?.data.map((item, index) => {
            return (
              <Tr key={item.diseaseNumber}>
                <Td>{index + 1}</Td>
                <Td>{item.diseaseEN}</Td>
                <Td>{item.diseaseTH}</Td>
                <Td>
                  <EditIcon
                    onClick={() => {
                      handleEdit(item)
                    }}
                    role="button"
                    _hover={{ opacity: '0.6' }}
                  />
                </Td>
                {/* <Td>{item.symptomDetailEN}</Td>
                <Td>{item.symptomDetailTH}</Td>
                <Td>{item.treatmentGuidelinesEN}</Td>
                <Td>{item.treatmentGuidelinesTH}</Td> */}
              </Tr>
            )
          })}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('common:admin.disease.edit')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel fontWeight={600} >{t('common:admin.disease.diseaseEN')}</FormLabel>
              <Input
                value={diseaseEN}
                onChange={e => {
                  setDiseaseEN(e.target.value)
                }}
                type="text"
              />
              <FormLabel fontWeight={600}  mt="10px">{t('common:admin.disease.diseaseTH')}</FormLabel>
              <Input
                value={diseaseTH}
                onChange={e => {
                  setDiseaseTH(e.target.value)
                }}
                type="text"
              />
              <FormLabel fontWeight={600}  mt="10px">{t('common:admin.disease.detailEN')}</FormLabel>
              <Textarea
                value={symptomDetailEN}
                onChange={e => {
                  setSymptomDetailEN(e.target.value)
                }}
                type="text"
              />
              <FormLabel fontWeight={600}  mt="10px">{t('common:admin.disease.detailTH')}</FormLabel>
              <Textarea
                value={symptomDetailTH}
                onChange={e => {
                  setSymptomDetailTH(e.target.value)
                }}
                type="text"
              />
              <FormLabel fontWeight={600}  mt="10px">{t('common:admin.disease.guidelinesEN')}</FormLabel>
              <Textarea
                value={treatmentGuidelinesEN}
                onChange={e => {
                  setTreatmentGuidelinesEN(e.target.value)
                }}
                type="text"
              />
              <FormLabel fontWeight={600} mt="10px">{t('common:admin.disease.guidelinesTH')}</FormLabel>
              <Textarea
                value={treatmentGuidelinesTH}
                onChange={e => {
                  setTreatmentGuidelinesTH(e.target.value)
                }}
                type="textarea"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
            {t('common:admin.close')}
            </Button>
            <Button
              disabled={enableButton}
              onClick={handleUpdateDisease}
              colorScheme="blue"
            >
              {t('common:admin.save')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <LoadingPage loading={isLoading} />
    </>
  )
}

export default Disease
