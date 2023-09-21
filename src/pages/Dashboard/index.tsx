import {
  DashboardContainer,
  IconPatient,
  CirclePatient,
  NamePatient,
  DashboardNavbar,
  DisplayHeader,
  Avatar,
  Info,
} from './styles'
import {
  CaretLeft,
  CaretRight,
  FileX,
  PencilSimpleLine,
} from '@phosphor-icons/react'
import { Popup } from '../../components/Popup'
import { useState } from 'react'

type ClickType = true | false

export function Dashboard() {
  const [clicou, setClicou] = useState<ClickType>(false)

  return (
    <DashboardContainer>
      <DashboardNavbar>
        <CaretLeft className="buttonNavigate" weight="bold" />
        <IconPatient>
          <CirclePatient>
            <h1>M</h1>
          </CirclePatient>
          <NamePatient>Marcos Favarão</NamePatient>
        </IconPatient>
        <CaretRight className="buttonNavigate" weight="bold" />
      </DashboardNavbar>
      <DisplayHeader>
        <Avatar />
        <Info>
          <h1>Marcos Adriano Lorencini Favarão</h1>
          <h2>Tratamento Completo</h2>
          <h3>Próxima consulta: 01/01/1900 - 00:00 hrs</h3>
          <div>
            <h3>Rua Ernesto Benfodini de Morães, 512</h3>
            <h3>Ribeirão Preto / SP</h3>
          </div>
        </Info>

        <FileX
          className="iconDeletCard"
          weight="bold"
          size={23}
          onClick={() => {
            console.log('clicoooouuuu')

            return setClicou(true)
          }}
        />
        {clicou ? (
          <Popup
            title="Ação Necessária"
            nameButton="Confirmar"
            buttonColorVariant={'red'}
            onClose={() => setClicou(false)}
            id="modal"
          >
            <div>hahahah</div>
          </Popup>
        ) : null}
        <PencilSimpleLine className="iconEditCard" weight="bold" size={23} />
      </DisplayHeader>
    </DashboardContainer>
  )
}
