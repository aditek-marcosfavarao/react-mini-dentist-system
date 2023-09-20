import { formatDate } from '../../common/utils'
import { InputForm } from '../../components/Inputs/InputForm'

import {
  EditionContainer,
  EditionDisplay,
  DisplayHeader,
  Avatar,
  Info,
  EditionContent,
  ContentHeader,
  ContentBlock,
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
              <button type="submit">Salvar</button>
            </ContentHeader>

            <ContentBlock>
              <h3>Apontamentos</h3>

              <InputForm label="Última consulta" />
            </ContentBlock>
          </EditionContent>
        </EditionDisplay>
      </EditionContainer>
    </>
  )
}
