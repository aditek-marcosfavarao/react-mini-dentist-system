import { Envelope, EyeSlash } from '@phosphor-icons/react'

import { InputLogin } from '../../components/Inputs/InputLogin'
import { Button } from '../../components/Buttons/Button'

import {
  LoginContainer,
  LoginDisplay,
  LoginHeader,
  LoginForm,
  LoginFooter,
} from './styles'

import { useNavigate } from 'react-router-dom'

export function Login() {
  const navigate = useNavigate()
  function handleSubmitLoginForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <>
      <LoginContainer>
        <LoginDisplay>
          <LoginHeader>
            <h1>Login</h1>
            <h2>Bem vindo ao nosso sistema!</h2>
          </LoginHeader>

          <LoginForm action="" onSubmit={handleSubmitLoginForm}>
            <InputLogin
              required
              id="email"
              type="email"
              name="email"
              label="e-mail"
              // maxLength={10}
              iconLeft={() => <Envelope />}
            />

            <InputLogin
              required
              id="password"
              type="password"
              name="password"
              label="senha"
              iconLeft={() => <EyeSlash />}
            />

            <Button type="submit" buttonName="entrar" />
          </LoginForm>

          <LoginFooter>
            <a
              href="http://aditek.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de uso
            </a>
          </LoginFooter>
        </LoginDisplay>
      </LoginContainer>
    </>
  )
}
