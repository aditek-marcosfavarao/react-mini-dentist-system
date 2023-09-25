import styled, { css } from 'styled-components'

interface InputSettingsProps {
  pointerOnHoverIcon?: boolean
}

export const LoginContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  height: 100vh;
  position: relative;

  &::before {
    content: '';
    background-color: ${(props) => props.theme['green-500']};
    width: 8rem;
    height: 16rem;
    padding: 1rem;

    position: absolute;
    top: -8rem;
    left: -4rem;

    rotate: 45deg;
  }
`

export const LoginDisplay = styled.main`
  background-color: ${(props) => props.theme.white};
  max-width: 30rem;
  height: 35rem;
  padding: 2rem;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  box-shadow: 0px 0px 16px 1px ${(props) => props.theme['gray-200']};

  display: flex;
  flex-direction: column;

  position: absolute;
  inset: 0;
  margin: auto;
  z-index: 1;

  @media (max-width: 480px) {
    margin: 1rem;
  }
`

export const LoginHeader = styled.header`
  h1 {
    color: ${(props) => props.theme.dark};
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.6;
    text-align: center;
    text-transform: capitalize;
  }

  h2 {
    color: ${(props) => props.theme['gray-300']};
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.6;
    text-align: center;
  }
`

export const LoginForm = styled.form`
  flex: 1;

  & > div {
    margin-top: 1rem;
  }

  & > div:last-child {
    margin-top: 3rem;
  }
`

export const LoginFooter = styled.footer`
  a {
    background-color: transparent;
    color: ${(props) => props.theme['gray-300']};
    display: block;
    margin: 0 auto;
    border: 0;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.6;
    text-align: center;
    outline: transparent solid 2px;

    &:hover {
      color: ${(props) => props.theme.dark};
    }

    &:focus-within {
      color: ${(props) => props.theme.dark};
      outline-color: ${(props) => props.theme['green-500']};
    }
  }
`

export const InputLabel = styled.label`
  width: 100%;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
  }
`

export const InputSettings = styled.div<InputSettingsProps>`
  background-color: ${(props) => props.theme['gray-300']};
  width: 100%;
  height: 2.25rem;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;

  display: flex;
  align-items: center;

  &:focus-within,
  &:hover {
    background-color: ${(props) => props.theme['green-500']};
    border-color: ${(props) => props.theme['green-500']};
  }

  input {
    color: ${(props) => props.theme.dark};
    width: 100%;
    height: 100%;
    padding: 0.5rem; // espaçamento dentro do input
    border: 0;
    outline: none;
  }

  svg {
    color: ${(props) => props.theme.white};
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;
    border: 0;

    // alterar espessura do elemento svg
    // necessário usar uma cor de linha(stroke) para surtir efeito
    /* stroke: ${(props) => props.theme.white};
    stroke-width: 4px; */

    ${(props) =>
      props.pointerOnHoverIcon &&
      css`
        cursor: pointer;
      `}
  }
`
