import logoDentist from '../../assets/svgs/logo-clinic.svg'

import { formatDate } from '../../utils'

import { HeaderContainer, HeaderLoginInfo } from './styles'

export function Header() {
  const lastLogin = new Date() // ! substituir por dados vindos da fake-api
  const lastLoginDateFormatted = {
    simple: formatDate(lastLogin, 'simple'),
    complete: formatDate(lastLogin, 'complete'),
  }

  return (
    <>
      <HeaderContainer>
        <img src={logoDentist} alt="" />

        <HeaderLoginInfo>
          <h1>Bem vindo Marcos!</h1>
          <time
            title={lastLoginDateFormatted.complete}
            dateTime={lastLogin.toISOString()}
          >
            Última acesso: {lastLoginDateFormatted.complete}
          </time>
        </HeaderLoginInfo>
      </HeaderContainer>
    </>
  )
}
