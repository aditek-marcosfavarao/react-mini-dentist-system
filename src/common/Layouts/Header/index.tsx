import logoDentist from '../../assets/svgs/logo-clinic.svg'

import { formatDate } from '../../utils'

import { HeaderContainer, HeaderLoginInfo } from './styles'

import { useNavigate } from 'react-router-dom'

import { SignOut } from '@phosphor-icons/react'

export function Header() {
  const navigate = useNavigate()
  const lastLogin = new Date() // ! substituir por dados vindos da fake-api
  const lastLoginDateFormatted = {
    simple: formatDate(lastLogin, 'simple'),
    complete: formatDate(lastLogin, 'complete'),
  }

  return (
    <>
      <HeaderContainer>
        <img
          src={logoDentist}
          alt=""
          onClick={() => {
            navigate('/dashboard')
          }}
        />
        <div className="teste">
          <HeaderLoginInfo>
            <h1>Bem vindo(a) Marcos!</h1>
            <time
              title={lastLoginDateFormatted.complete}
              dateTime={lastLogin.toISOString()}
            >
              Última acesso: {lastLoginDateFormatted.complete}
            </time>
          </HeaderLoginInfo>
          <SignOut size={26} color="white" onClick={() => navigate('/login')} />
        </div>
      </HeaderContainer>
    </>
  )
}
