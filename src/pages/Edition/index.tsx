import { formatDate } from '../../common/utils'
import { Button } from '../../components/Buttons/Button'

import { InputCheckbox } from '../../components/Inputs/InputCheckbox'
import { InputForm } from '../../components/Inputs/InputForm'

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
  const lastEditionDate = new Date()
  const lastProfileEdition = formatDate(lastEditionDate, 'simple')

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
                  inputSize={'medium'}
                />
                <InputForm
                  required
                  id="next-appointment"
                  name="next-appointment"
                  type="datetime-local"
                  label="Próxima consulta"
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
                  inputSize={'medium'}
                />
                <InputForm
                  required
                  id="treatment-end"
                  name="treatment-end"
                  type="datetime-local"
                  label="Finalizado em"
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
                  inputSize={'extended'}
                />
              </LineBreaker>

              <LineBreaker>
                <InputForm
                  required
                  id="cpf"
                  name="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  label="CPF"
                  inputSize={'medium'}
                />
                <InputForm
                  required
                  id="rg"
                  name="rg"
                  type="text"
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
                  inputSize={'small'}
                />
                <InputForm
                  required
                  id="age"
                  name="age"
                  type="text"
                  label="Idade"
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
                  inputSize={'medium'}
                />
                <InputForm
                  required
                  id="uf"
                  name="uf"
                  type="text"
                  label="UF"
                  inputSize={'small'}
                />
                <InputForm
                  required
                  id="cep"
                  name="cep"
                  type="text"
                  label="CEP"
                  inputSize={'small'}
                />
              </LineBreaker>
            </ContentBlock>

            <ContentBlock>
              <h3>Fármacos</h3>

              <LineBreaker>
                <InputCheckbox label="Alérgicos" id="drugs" />
              </LineBreaker>

              <LineBreaker>
                <textarea cols={30} rows={10} placeholder="..." />
              </LineBreaker>
            </ContentBlock>

            <ContentBlock>
              <h3>Observações</h3>

              <LineBreaker>
                <textarea cols={30} rows={10} placeholder="..." />
              </LineBreaker>
            </ContentBlock>
          </EditionContent>
        </EditionDisplay>
      </EditionContainer>
    </>
  )
}
