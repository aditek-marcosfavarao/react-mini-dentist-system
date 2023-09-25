import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { formatDate } from '../../common/utils'
import { api } from '../../common/services'

import { Button } from '../../components/Buttons/Button'

import { formSchema, FormData } from './data/FormValidator'
import { datalistOptionsTratment, datalistOptionsUF } from './data/datalist'

import {
  EditionContainer,
  EditionDisplay,
  DisplayHeader,
  Avatar,
  Info,
  EditionContent,
  ContentHeader,
  ContentBlock,
  LineBreaker,
  InputLabel,
} from './styles'

export function Edition() {
  const [editForm, setEditForm] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastApointment: new Date(),
      nextApointment: new Date(),
      treatmentType: '',
      treatmentStart: new Date(),
      treatmentEnd: '',
      userName: '',
      userID: '',
      userDocument: '',
      userBirthdate: new Date(),
      userAge: 0,
      userPhone: '',
      userCelPhone: '',
      userEmail: '',
      userAddress: '',
      userAddressNumber: 0,
      userAddressComplement: '',
      userAddressCity: '',
      userAddressUF: '',
      userAddressCEP: 0,
      drugObservations: '',
      observations: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  })

  function handleChangeFormEdition() {
    setEditForm((state) => !state)
  }

  function onSubmitFormEdition(data: FormData) {
    console.log(data)
    handleChangeFormEdition()
  }

  React.useEffect(() => {
    ;(async function () {
      try {
        const response = await api('/clients')
      } catch (error) {
        console.log('request error: ' + error)
      }
    })()
  }, [])

  // formState -> conjunto de funções para manipulação dos inputs quando form submmitado
  console.log(formErrors)

  const lastEditionDate = new Date()
  const lastProfileEdition = formatDate(lastEditionDate, 'simple')
  const isFormEditionEnabled = editForm
  const inputDisabled = !isFormEditionEnabled
  const avatarLetter = 'M'

  return (
    <>
      <EditionContainer>
        <EditionDisplay>
          <DisplayHeader>
            <Avatar contentLetter={avatarLetter} />

            <Info>
              <h2>{user.fullName}</h2>
              <h3>
                Tipo de tratamento: <span>{user.type}</span>
              </h3>
              <time>
                Última edição:{' '}
                {formatDate(new Date(user.lastEdition), 'complete')}
              </time>
            </Info>
          </DisplayHeader>

          <EditionContent
            action=""
            onSubmit={handleSubmit(onSubmitFormEdition)}
          >
            <ContentHeader>
              <h2>Editar informações do paciente</h2>
              {!isFormEditionEnabled && (
                <Button
                  type="button"
                  buttonName="Editar"
                  onClick={handleChangeFormEdition}
                  buttonColor="gray"
                />
              )}

              {isFormEditionEnabled && (
                <Button type="submit" buttonName="Salvar" buttonColor="green" />
              )}
            </ContentHeader>

            <ContentBlock>
              <h3>Apontamentos</h3>

              <LineBreaker>
                <InputLabel htmlFor="lastApointment" inputSize="medium">
                  <span>Última consulta</span>

                  <input
                    disabled={inputDisabled}
                    id="lastApointment"
                    type="datetime-local"
                    {...register('lastApointment')}
                  />
                </InputLabel>

                <InputLabel htmlFor="nextApointment" inputSize="medium">
                  <span>Próxima consulta</span>

                  <input
                    disabled={inputDisabled}
                    id="nextApointment"
                    type="datetime-local"
                    {...register('nextApointment')}
                  />
                </InputLabel>
              </LineBreaker>
            </ContentBlock>

            <ContentBlock>
              <h3>Tratamento</h3>

              <LineBreaker>
                <InputLabel htmlFor="treatmentType" inputSize="extended">
                  <span>Tipo de tratamento</span>

                  <input
                    disabled={inputDisabled}
                    id="treatmentType"
                    list="treatments"
                    type="text"
                    {...register('treatmentType')}
                  />
                </InputLabel>

                <datalist id="treatments">
                  {datalistOptionsTratment.map((option) => {
                    return <option key={option.value} value={option.value} />
                  })}
                </datalist>
              </LineBreaker>

              <LineBreaker>
                <InputLabel htmlFor="treatmentStart" inputSize="medium">
                  <span>Iniciado em</span>

                  <input
                    disabled={inputDisabled}
                    id="treatmentStart"
                    type="date"
                    {...register('treatmentStart')}
                  />
                </InputLabel>

                <InputLabel htmlFor="treatmentEnd" inputSize="medium">
                  <span>Finalizado em</span>

                  <input
                    disabled={inputDisabled}
                    id="treatmentEnd"
                    type="date"
                    {...register('treatmentEnd')}
                  />
                </InputLabel>
              </LineBreaker>
            </ContentBlock>

            <ContentBlock>
              <h3>Informações</h3>

              <LineBreaker>
                <InputLabel htmlFor="userName" inputSize="extended">
                  <span>Nome completo</span>

                  <input
                    disabled={inputDisabled}
                    id="userName"
                    type="text"
                    {...register('userName')}
                  />
                </InputLabel>
              </LineBreaker>

              <LineBreaker>
                <InputLabel htmlFor="userID" inputSize="medium">
                  <span>CPF</span>

                  <input
                    disabled={inputDisabled}
                    id="userID"
                    type="text"
                    maxLength={11}
                    placeholder="000.000.000-00"
                    {...register('userID')}
                  />
                </InputLabel>

                <InputLabel htmlFor="userDocument" inputSize="medium">
                  <span>RG</span>

                  <input
                    disabled={inputDisabled}
                    id="userDocument"
                    type="text"
                    maxLength={9}
                    placeholder="00.000.000-0"
                    {...register('userDocument')}
                  />
                </InputLabel>

                <InputLabel htmlFor="userBirthdate" inputSize="medium">
                  <span>Nascimento</span>

                  <input
                    disabled={inputDisabled}
                    id="userBirthdate"
                    type="date"
                    {...register('userBirthdate')}
                  />
                </InputLabel>

                <InputLabel htmlFor="userAge" inputSize="small">
                  <span>Idade</span>

                  <input
                    disabled={inputDisabled}
                    id="userAge"
                    type="number"
                    min={1}
                    {...register('userAge')}
                  />
                </InputLabel>
              </LineBreaker>

              <LineBreaker>
                <InputLabel htmlFor="userPhone" inputSize="medium">
                  <span>Telefone</span>

                  <input
                    disabled={inputDisabled}
                    id="userPhone"
                    type="text"
                    {...register('userPhone')}
                  />
                </InputLabel>

                <InputLabel htmlFor="userCelPhone" inputSize="medium">
                  <span>Celular</span>

                  <input
                    disabled={inputDisabled}
                    id="userCelPhone"
                    type="text"
                    {...register('userCelPhone')}
                  />
                </InputLabel>
              </LineBreaker>

              <LineBreaker>
                <InputLabel htmlFor="userEmail" inputSize="extended">
                  <span>E-mail</span>

                  <input
                    disabled={inputDisabled}
                    id="userEmail"
                    type="email"
                    placeholder="mail@mail.com"
                    {...register('userEmail')}
                  />
                </InputLabel>
              </LineBreaker>

              <LineBreaker>
                <InputLabel htmlFor="userAddress" inputSize="extended">
                  <span>Endereço</span>

                  <input
                    disabled={inputDisabled}
                    id="userAddress"
                    type="text"
                    {...register('userAddress')}
                  />
                </InputLabel>
              </LineBreaker>

              <LineBreaker>
                <InputLabel htmlFor="userAddressNumber" inputSize="small">
                  <span>N°</span>

                  <input
                    disabled={inputDisabled}
                    id="userAddressNumber"
                    type="number"
                    min={1}
                    {...register('userAddressNumber')}
                  />
                </InputLabel>

                <InputLabel htmlFor="userAddressComplement" inputSize="medium">
                  <span>Complemento</span>

                  <input
                    disabled={inputDisabled}
                    id="userAddressComplement"
                    type="text"
                    {...register('userAddressComplement')}
                  />
                </InputLabel>

                <InputLabel htmlFor="userAddressCity" inputSize="medium">
                  <span>Cidade</span>

                  <input
                    disabled={inputDisabled}
                    id="userAddressCity"
                    type="text"
                    {...register('userAddressCity')}
                  />
                </InputLabel>

                <InputLabel htmlFor="userAddressUF" inputSize="small">
                  <span>UF</span>

                  <input
                    disabled={inputDisabled}
                    id="userAddressUF"
                    maxLength={2}
                    type="text"
                    list="ufs"
                    {...register('userAddressUF')}
                  />

                  <datalist id="ufs">
                    {datalistOptionsUF.map((option) => {
                      return <option key={option.value} value={option.value} />
                    })}
                  </datalist>
                </InputLabel>

                <InputLabel htmlFor="userAddressCEP" inputSize="small">
                  <span>CEP</span>

                  <input
                    disabled={inputDisabled}
                    id="userAddressCEP"
                    type="text"
                    {...register('userAddressCEP')}
                  />
                </InputLabel>
              </LineBreaker>
            </ContentBlock>

            <ContentBlock>
              <h3>Fármacos</h3>

              <LineBreaker>
                <textarea
                  disabled={inputDisabled}
                  cols={30}
                  rows={10}
                  placeholder="..."
                  {...register('drugObservations')}
                />
              </LineBreaker>
            </ContentBlock>

            <ContentBlock>
              <h3>Observações</h3>

              <LineBreaker>
                <textarea
                  disabled={inputDisabled}
                  cols={30}
                  rows={10}
                  placeholder="..."
                  {...register('observations')}
                />
              </LineBreaker>
            </ContentBlock>
          </EditionContent>
        </EditionDisplay>
      </EditionContainer>
    </>
  )
}
