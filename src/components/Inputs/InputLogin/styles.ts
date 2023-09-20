import styled, { css } from 'styled-components'

interface InputPropertiesProps {
  cursorPointerOnHoverIcon?: boolean
}

export const InputLoginContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
  }
`

export const InputProperties = styled.div<InputPropertiesProps>`
  background-color: ${(props) => props.theme['gray-300']};
  width: 100%;
  height: 2rem;
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
    padding: 1rem; // espaçamento dentro do input
    border: 0;
    outline: none;
  }

  svg {
    color: ${(props) => props.theme.white};
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;
    border: 0;

    ${(props) =>
      props.cursorPointerOnHoverIcon &&
      css`
        cursor: pointer;
      `}
  }
`
