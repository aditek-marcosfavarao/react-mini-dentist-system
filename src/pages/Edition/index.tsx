import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { formatDate } from '../../common/utils'

import { Button } from '../../components/Buttons/Button'

import React from 'react'

import { datalistOptionsTratment, datalistOptionsUF } from './data'

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

const editionFormValidationSchema = zod.object({
  lastApointment: zod.coerce.date(),
  nextApointment: zod.coerce.date(),
  treatmentType: zod
    .string()
    .min(1, { message: 'Treatment is required' })
    .trim(),
  treatmentStart: zod.coerce.date(),
  treatmentEnd: zod.coerce.date().optional().or(zod.literal('')),
  userName: zod.string().min(1, 'User name is required').max(100).trim(),
  userID: zod.string().min(1, 'User id is required').max(11).trim(),
  userDocument: zod.string().min(1, 'User document is required').max(9).trim(),
  userBirthdate: zod.coerce.date(),
  userAge: zod.coerce
    .number()
    .min(1, { message: 'User age is required' })
    .int()
    .positive(),
  userPhone: zod.string().trim().optional(),
  userCelPhone: zod.string().trim().optional(),
  userEmail: zod
    .string()
    .nonempty('O email é obrigatório')
    .email({
      message: 'Formato de e-mail inválido',
    })
    .toLowerCase()
    .min(1, { message: 'Email is required' })
    .trim(),
  userAddress: zod.string().min(1, { message: 'User address is required' }),
  userAddressNumber: zod.coerce
    .number()
    .min(1, { message: 'User address number is required' })
    .int()
    .positive(),
  userAddressComplement: zod.string().trim().optional().or(zod.literal('')),
  userAddressCity: zod
    .string()
    .min(1, { message: 'User address city is required' })
    .trim(),
  userAddressUF: zod
    .string()
    .toLowerCase()
    .min(2, { message: 'User address UF is required' })
    .max(2)
    .trim(),
  userAddressCEP: zod.coerce
    .number()
    .min(1, { message: 'User address number is required' })
    .int()
    .positive(),
  drugObservations: zod.string().trim().optional(),
  observations: zod.string().trim().optional(),
})

type LoginFormData = zod.infer<typeof editionFormValidationSchema>

export function Edition() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(editionFormValidationSchema),
    defaultValues: {
      lastApointment: new Date(),
      nextApointment: new Date(),
      treatmentType: '',
      treatmentStart: new Date(),
      treatmentEnd: new Date(),
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

  const [editForm, setEditForm] = React.useState(false)

  function handleChangeFormEdition() {
    setEditForm((state) => !state)
  }

  function onSubmitFormEdition(data: LoginFormData) {
    console.log(data)
    handleChangeFormEdition()
  }

  // formState -> conjunto de funções para manipulação dos inputs quando form submmitado
  console.log(formErrors)

  const lastEditionDate = new Date()
  const lastProfileEdition = formatDate(lastEditionDate, 'simple')
  const isFormEditionEnabled = editForm

  const inputDisabled = !isFormEditionEnabled
  return (
    <>
      <EditionContainer>
        <EditionDisplay>
          <DisplayHeader>
            <Avatar />

            <Info>
              <h2>Marcos Adriano Lorencini Favarão</h2>
              <h3>
                Tipo de tratamento: <span>Complete</span>
              </h3>
              <time>Última edição: {lastProfileEdition}</time>
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
                    id="lastApointment"
                    type="datetime-local"
                    {...(register('lastApointment'),
                    { disabled: inputDisabled })}
                  />
                </InputLabel>

                <InputLabel htmlFor="nextApointment" inputSize="medium">
                  <span>Próxima consulta</span>

                  <input
                    id="nextApointment"
                    type="datetime-local"
                    {...(register('nextApointment'),
                    { disabled: inputDisabled })}
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
                    id="treatmentType"
                    list="treatments"
                    type="text"
                    {...(register('treatmentType'),
                    { disabled: inputDisabled })}
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
                    id="treatmentStart"
                    type="date"
                    {...(register('treatmentStart'),
                    { disabled: inputDisabled })}
                  />
                </InputLabel>

                <InputLabel htmlFor="treatmentEnd" inputSize="medium">
                  <span>Finalizado em</span>

                  <input
                    id="treatmentEnd"
                    type="date"
                    {...(register('treatmentEnd'), { disabled: inputDisabled })}
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
                    id="userName"
                    type="text"
                    {...(register('userName'), { disabled: inputDisabled })}
                  />
                </InputLabel>
              </LineBreaker>

              <LineBreaker>
                <InputLabel htmlFor="userID" inputSize="medium">
                  <span>CPF</span>

                  <input
                    id="userID"
                    type="text"
                    maxLength={11}
                    placeholder="000.000.000-00"
                    {...(register('userID'), { disabled: inputDisabled })}
                  />
                </InputLabel>

                <InputLabel htmlFor="userDocument" inputSize="medium">
                  <span>RG</span>

                  <input
                    id="userDocument"
                    type="text"
                    maxLength={9}
                    placeholder="00.000.000-0"
                    {...(register('userDocument'), { disabled: inputDisabled })}
                  />
                </InputLabel>

                <InputLabel htmlFor="userBirthdate" inputSize="medium">
                  <span>Nascimento</span>

                  <input
                    id="userBirthdate"
                    type="date"
                    {...(register('userBirthdate'),
                    { disabled: inputDisabled })}
                  />
                </InputLabel>

                <InputLabel htmlFor="userAge" inputSize="small">
                  <span>Idade</span>

                  <input
                    id="userAge"
                    type="number"
                    min={1}
                    {...(register('userAge'), { disabled: inputDisabled })}
                  />
                </InputLabel>
              </LineBreaker>

              <LineBreaker>
                <InputLabel htmlFor="userPhone" inputSize="medium">
                  <span>Telefone</span>

                  <input
                    id="userPhone"
                    type="text"
                    {...(register('userPhone'), { disabled: inputDisabled })}
                  />
                </InputLabel>

                <InputLabel htmlFor="userCelPhone" inputSize="medium">
                  <span>Celular</span>

                  <input
                    id="userCelPhone"
                    type="text"
                    {...(register('userCelPhone'), { disabled: inputDisabled })}
                  />
                </InputLabel>
              </LineBreaker>

              <LineBreaker>
                <InputLabel htmlFor="userEmail" inputSize="extended">
                  <span>E-mail</span>

                  <input
                    id="userEmail"
                    type="email"
                    placeholder="mail@mail.com"
                    {...(register('userEmail'), { disabled: inputDisabled })}
                  />
                </InputLabel>
              </LineBreaker>

              <LineBreaker>
                <InputLabel htmlFor="userAddress" inputSize="extended">
                  <span>Endereço</span>

                  <input
                    id="userAddress"
                    type="text"
                    {...(register('userAddress'), { disabled: inputDisabled })}
                  />
                </InputLabel>
              </LineBreaker>

              <LineBreaker>
                <InputLabel htmlFor="userAddressNumber" inputSize="small">
                  <span>N°</span>

                  <input
                    id="userAddressNumber"
                    type="number"
                    min={1}
                    {...(register('userAddressNumber'),
                    { disabled: inputDisabled })}
                  />
                </InputLabel>

                <InputLabel htmlFor="userAddressComplement" inputSize="medium">
                  <span>Complemento</span>

                  <input
                    id="userAddressComplement"
                    type="text"
                    {...(register('userAddressComplement'),
                    { disabled: inputDisabled })}
                  />
                </InputLabel>

                <InputLabel htmlFor="userAddressCity" inputSize="medium">
                  <span>Cidade</span>

                  <input
                    id="userAddressCity"
                    type="text"
                    {...(register('userAddressCity'),
                    { disabled: inputDisabled })}
                  />
                </InputLabel>

                <InputLabel htmlFor="userAddressUF" inputSize="small">
                  <span>UF</span>

                  <input
                    id="userAddressUF"
                    maxLength={2}
                    type="text"
                    list="ufs"
                    {...(register('userAddressUF'),
                    { disabled: inputDisabled })}
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
                    id="userAddressCEP"
                    type="text"
                    {...(register('userAddressCEP'),
                    { disabled: inputDisabled })}
                  />
                </InputLabel>
              </LineBreaker>
            </ContentBlock>

            <ContentBlock>
              <h3>Fármacos</h3>

              <LineBreaker>
                <textarea
                  cols={30}
                  rows={10}
                  placeholder="..."
                  {...(register('drugObservations'),
                  { disabled: inputDisabled })}
                />
              </LineBreaker>
            </ContentBlock>

            <ContentBlock>
              <h3>Observações</h3>

              <LineBreaker>
                <textarea
                  cols={30}
                  rows={10}
                  placeholder="..."
                  {...(register('observations'), { disabled: inputDisabled })}
                />
              </LineBreaker>
            </ContentBlock>
          </EditionContent>
        </EditionDisplay>
      </EditionContainer>
    </>
  )
}
