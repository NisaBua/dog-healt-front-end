import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'
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
import LoadingPage from 'components/loadingPage'

import symptomAction from 'actions/Symptom'

function Symptom() {
  const dispatch = useDispatch()
  const { t } = useTranslation(['common'])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [symptomNameEN, setSymptomNameEN] = useState('')
  const [symptomNameTH, setSymptomNameTH] = useState('')
  const [questionTH, setQuestionTH] = useState('')
  const [questionEN, setQuestionEN] = useState('')
  const [symptomNumber, setSymptomNumber] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [enableButton, setEnableButton] = useState(false)

  const getSymptom = useSelector(state => state.getSymptom)
  const updateSymptom = useSelector(state => state.updateSymptom)

  const handleEdit = disease => {
    onOpen()
    setSymptomNameEN(disease.symptomNameEN)
    setSymptomNameTH(disease.symptomNameTH)
    setQuestionTH(disease.question_TH ?? '')
    setQuestionEN(disease.question_EN ?? '')
    setSymptomNumber(disease.symptomNumber)
  }

  const handleUpdateSymptom = () => {
    setIsLoading(true)
    dispatch(
      symptomAction.UpdateSymptom(
        questionTH,
        questionEN,
        symptomNameEN,
        symptomNameTH,
        symptomNumber
      )
    )
  }

  useEffect(() => {
    dispatch(symptomAction.GetSymptom())
  }, [dispatch])

  useEffect(() => {
    if (updateSymptom.lists?.success) {
      onClose()
      setIsLoading(false)
      dispatch(symptomAction.GetSymptom())
      dispatch(symptomAction.ClearUpdateSymptom())
      Swal.fire('', updateSymptom.lists.message, 'success')
    } else if (updateSymptom.lists?.data === null) {
      Swal.fire('', updateSymptom.lists.message, 'error')
    }
  }, [updateSymptom])

  useEffect(() => {
    if (!questionTH || !questionEN || !symptomNameEN || !symptomNameTH || !symptomNumber) {
      setEnableButton(true)
      console.log('questionEN',questionEN);
    }else{
      setEnableButton(false)
    }
  }, [questionTH, questionEN, symptomNameEN, symptomNameTH, symptomNumber])

  return (
    <>
      <Table variant="simple">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            <Th></Th>
            <Th>{t('common:admin.symptom.symptomEN')}</Th>
            <Th>{t('common:admin.symptom.symptomTH')}</Th>
            <Th></Th>
            {/* <Th>Treatment guidelines english</Th>
            <Th>Treatment guidelines thai</Th>
            <Th>Symptom detail english</Th>
            <Th>Symptom detail thai</Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {getSymptom.lists?.data.map((item, index) => {
            return (
              <Tr key={item.symptomNumber}>
                <Td>{index + 1}</Td>
                <Td>{item.symptomNameEN}</Td>
                <Td>{item.symptomNameTH}</Td>
                <Td>
                  <EditIcon
                    onClick={() => {
                      handleEdit(item)
                    }}
                    role="button"
                    _hover={{ opacity: '0.6' }}
                  />
                </Td>
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
          <ModalHeader>{t('common:admin.symptom.edit')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>{t('common:admin.symptom.symptomEN')}</FormLabel>
              <Input
                value={symptomNameEN}
                onChange={e => {
                  setSymptomNameEN(e.target.value)
                }}
                type="text"
              />
              <FormLabel mt="10px">{t('common:admin.symptom.symptomTH')}</FormLabel>
              <Input
                value={symptomNameTH}
                onChange={e => {
                  setSymptomNameTH(e.target.value)
                }}
                type="text"
              />
              <FormLabel mt="10px">{t('common:admin.symptom.questionEN')}</FormLabel>
              <Textarea
                value={questionEN}
                onChange={e => {
                  setQuestionEN(e.target.value)
                }}
                type="text"
              />
              <FormLabel mt="10px">{t('common:admin.symptom.questionTH')}</FormLabel>
              <Textarea
                value={questionTH}
                onChange={e => {
                  setQuestionTH(e.target.value)
                }}
                type="text"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
            {t('common:admin.close')}
            </Button>
            <Button
              disabled={enableButton}
              onClick={handleUpdateSymptom}
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

export default Symptom
