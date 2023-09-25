import logoDentist from '../../assets/svgs/logo-clinic.svg'

import { formatDate } from '../../utils'

import { HeaderContainer, HeaderLoginInfo } from './styles'

import { useNavigate } from 'react-router-dom'

import { SignOut } from '@phosphor-icons/react'

import React from 'react'
import { Popup } from '../../../components/Popup'

type ClickType = true | false

export function Header() {
  const [isPopupVisible, setIsPopupVisible] = React.useState<ClickType>(false)
  const navigate = useNavigate()
  const lastLogin = new Date() // ! substituir por dados vindos da fake-api
  const lastLoginDateFormatted = {
    simple: formatDate(lastLogin, 'simple'),
    complete: formatDate(lastLogin, 'complete'),
  }

  const onLogoutUser = () => {
    navigate('/login')
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
          <SignOut
            size={26}
            color="white"
            onClick={() => setIsPopupVisible(true)}
          />
          {isPopupVisible && (
            <Popup
              title="Ação Necessária"
              nameButton="Confirmar"
              buttonColorVariant={'green'}
              onClose={() => setIsPopupVisible(false)}
              id="modal"
              onHandleAction={() => onLogoutUser()}
            >
              <p>
                Ao confirmar, você será redirecionado à página de login. Deseja
                continuar?
              </p>
            </Popup>
          )}
        </div>
      </HeaderContainer>
    </>
  )
}
