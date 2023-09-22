import { formatDate } from '../../common/utils'
import { Button } from '../../components/Buttons/Button'

import { InputCheckbox } from '../../components/Inputs/InputCheckbox'
import { InputForm } from '../../components/Inputs/InputForm'
import { UserType } from '../../types/user'

import { datalistOptions } from './data'

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
} from './styles'

export function Edition() {
  const userLocalStorage = localStorage.getItem('user')
  const user: UserType = JSON.parse(userLocalStorage!)

  const userNameLetter = user.name.substring(0, 1)

  const convertDate = (date: Date) => {
    const data = date.toLocaleString()
    return data.slice(0, 16)
  }
  return (
    <>
      <EditionContainer>
        <EditionDisplay>
          <DisplayHeader>
            <Avatar contentLetter={userNameLetter} />

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

          <EditionContent action="">
            <ContentHeader>
              <h2>Editar informações do paciente</h2>
              <Button type="submit" buttonName="Salvar" />
            </ContentHeader>

            <ContentBlock>
              <h3>Apontamentos</h3>

              <LineBreaker>
                <InputForm
                  required
                  id="last-appointment"
                  name="last-appointment"
                  type="datetime-local"
                  label="Última consulta"
                  defaultValue={convertDate(user.lastConsult)}
                  inputSize={'medium'}
                />
                <InputForm
                  required
                  id="next-appointment"
                  name="next-appointment"
                  type="datetime-local"
                  label="Próxima consulta"
                  defaultValue={convertDate(user.nextConsult)}
                  inputSize={'medium'}
                />
              </LineBreaker>
            </ContentBlock>

            <ContentBlock>
              <h3>Tratamento</h3>

              <LineBreaker>
                <InputForm
                  required
                  id="treatment-type"
                  name="treatment-type"
                  list="treatments"
                  type="text"
                  defaultValue={user.type}
                  label="Tipo de tratamento"
                  inputSize={'extended'}
                />

                <datalist id="treatments">
                  {datalistOptions.map((option) => {
                    return <option key={option.value} value={option.value} />
                  })}
                </datalist>
              </LineBreaker>

              <LineBreaker>
                <InputForm
                  required
                  id="treatment-start"
                  name="treatment-start"
                  type="datetime-local"
                  label="Iniciado em"
                  defaultValue={convertDate(user.lastConsult)}
                  inputSize={'medium'}
                />
                <InputForm
                  required
                  id="treatment-end"
                  name="treatment-end"
                  type="datetime-local"
                  label="Finalizado em"
                  defaultValue={convertDate(user.lastConsult)}
                  inputSize={'medium'}
                />
              </LineBreaker>
            </ContentBlock>

            <ContentBlock>
              <h3>Informações</h3>

              <LineBreaker>
                <InputForm
                  required
                  id="name"
                  name="name"
                  type="text"
                  label="Nome completo"
                  defaultValue={user.fullName}
                  inputSize={'extended'}
                />
              </LineBreaker>

              <LineBreaker>
                <InputForm
                  required
                  id="cpf"
                  name="cpf"
                  type="text"
                  defaultValue={user.cpf}
                  placeholder="000.000.000-00"
                  label="CPF"
                  inputSize={'medium'}
                />
                <InputForm
                  required
                  id="rg"
                  name="rg"
                  type="text"
                  defaultValue={user.rg}
                  placeholder="00.000.000-0"
                  label="RG"
                  inputSize={'medium'}
                />
                <InputForm
                  required
                  id="birthdate"
                  name="birthdate"
                  type="text"
                  label="Nascimento"
                  defaultValue={formatDate(new Date(user.birth), 'verySimple')}
                  inputSize={'small'}
                />
                <InputForm
                  required
                  id="age"
                  name="age"
                  type="text"
                  label="Idade"
                  defaultValue={user.age}
                  inputSize={'small'}
                />
              </LineBreaker>

              <LineBreaker>
                <InputForm
                  required
                  id="address"
                  name="address"
                  type="email"
                  placeholder="mail@mail.com"
                  label="E-mail"
                  defaultValue={user.email}
                  inputSize={'extended'}
                />
              </LineBreaker>

              <LineBreaker>
                <InputForm
                  required
                  id="address"
                  name="address"
                  type="text"
                  label="Endereço"
                  defaultValue={user.address.place}
                  inputSize={'extended'}
                />
              </LineBreaker>

              <LineBreaker>
                <InputForm
                  required
                  id="address-number"
                  name="address-number"
                  type="text"
                  label="N°"
                  defaultValue={user.address.number}
                  inputSize={'small'}
                />
                <InputForm
                  required
                  id="address-obs"
                  name="address-obs"
                  type="text"
                  label="Complemento"
                  inputSize={'medium'}
                />
                <InputForm
                  required
                  id="city"
                  name="city"
                  type="text"
                  label="Cidade"
                  defaultValue={user.address.city}
                  inputSize={'medium'}
                />
                <InputForm
                  required
                  id="uf"
                  name="uf"
                  type="text"
                  label="UF"
                  defaultValue={user.address.state}
                  inputSize={'small'}
                />
                <InputForm
                  required
                  id="cep"
                  name="cep"
                  type="text"
                  label="CEP"
                  defaultValue={user.address.zipCode}
                  inputSize={'small'}
                />
              </LineBreaker>
            </ContentBlock>

            <ContentBlock>
              <h3>Fármacos</h3>

              <LineBreaker>
                <InputCheckbox
                  label="Alérgicos"
                  id="drugs"
                  defaultChecked={user.allergy}
                />
              </LineBreaker>

              <LineBreaker>
                <textarea
                  cols={30}
                  rows={10}
                  placeholder="..."
                  defaultValue={user.allergyType}
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
                  defaultValue={user.description}
                />
              </LineBreaker>
            </ContentBlock>
          </EditionContent>
        </EditionDisplay>
      </EditionContainer>
    </>
  )
}
