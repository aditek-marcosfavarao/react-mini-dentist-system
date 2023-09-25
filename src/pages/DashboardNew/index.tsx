import { ArrowCircleLeft, ArrowCircleRight } from '@phosphor-icons/react'

import {
  DashboardContainer,
  Navbar,
  NavbarList,
  NavItem,
  Card,
  CardDetails,
} from './styles'

export function Dashboard() {
  return (
    <>
      <DashboardContainer>
        <Navbar>
          <ArrowCircleLeft />
          <NavbarList>
            <NavItem>Marcos Favarão</NavItem>
          </NavbarList>
          <ArrowCircleRight />
        </Navbar>

        <Card>
          <CardDetails>
            <h2>Marcos Adriano Lorencini Favarão</h2>
            <h3>Tratamento completo</h3>
            <h4>
              Próxima consulta: <time>01/01/1900 - 00:00hrs</time>
            </h4>
            <h4>
              <span>Rua Eduardo Soares de Azevedo, 170</span>{' '}
              <span>Ribeirão Preto/SP</span>
            </h4>
          </CardDetails>
        </Card>
      </DashboardContainer>
    </>
  )
}
