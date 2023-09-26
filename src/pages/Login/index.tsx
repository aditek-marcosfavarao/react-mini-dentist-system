import React from 'react'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Envelope, Eye, EyeSlash } from '@phosphor-icons/react'

import { Button } from '../../components/Buttons/Button'

import {
  LoginContainer,
  LoginDisplay,
  LoginHeader,
  LoginFooter,
  LoginForm,
  InputLabel,
  InputSettings,
} from './styles'
import { api } from '../../services/api'

interface IconProps {
  onClickEvent: () => void
}

const loginFormValidationSchema = zod.object({
  email: zod
    .string()
    .email({
      message: 'Must be a valid email',
    })
    .min(1, { message: 'Email is required' }),
  password: zod.string().min(1, { message: 'Password is required' }),
})

type LoginFormData = zod.infer<typeof loginFormValidationSchema>

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  })

  const [passwordVisibility, setPasswordVisibility] = React.useState(false)

  async function handleSubmitLoginForm(data: LoginFormData) {
    try {
      // const response = await api.post('/login')
      console.log(data)
    } catch (error) {
      console.error(error)
    } finally {
      reset()
    }
  }

  function handleChangePasswordVisibility() {
    setPasswordVisibility((state) => !state)
  }

  function PasswordIcon({ onClickEvent }: IconProps) {
    return isPasswordVisible ? (
      <Eye onClick={onClickEvent} />
    ) : (
      <EyeSlash onClick={onClickEvent} />
    )
  }

  // formState -> conjunto de funções para manipulação dos inputs quando form submmitado
  console.log(formErrors)

  const isPasswordVisible = passwordVisibility
  const inputPasswordType = isPasswordVisible ? 'text' : 'password'
  return (
    <>
      <LoginContainer>
        <LoginDisplay>
          <LoginHeader>
            <h1>Login</h1>
            <h2>Bem vindo ao nosso sistema!</h2>
          </LoginHeader>

          <LoginForm action="" onSubmit={handleSubmit(handleSubmitLoginForm)}>
            <InputLabel htmlFor="email">
              <span>Email</span>

              <InputSettings>
                <Envelope />
                <input type="email" id="email" {...register('email')} />
              </InputSettings>
            </InputLabel>

            <InputLabel htmlFor="password">
              <span>Senha</span>

              <InputSettings pointerOnHoverIcon>
                <PasswordIcon onClickEvent={handleChangePasswordVisibility} />
                <input
                  type={inputPasswordType}
                  id="password"
                  {...register('password')}
                />
              </InputSettings>
            </InputLabel>

            <Button buttonName="Entrar" type="submit" buttonColor="green" />
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
