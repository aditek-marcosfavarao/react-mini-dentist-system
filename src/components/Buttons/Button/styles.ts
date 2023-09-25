import styled from 'styled-components'

const BUTTON_COLOR = {
  gray: 'gray-400',
  green: 'green-500',
} as const

export type ButtonVariant = keyof typeof BUTTON_COLOR

interface ButtonContainerProps {
  buttonVariant: ButtonVariant
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  button {
    background-color: ${(props) =>
      props.theme[BUTTON_COLOR[props.buttonVariant]]};
    color: ${(props) => props.theme.white};
    width: 100%;
    padding: 0.5rem 1.5rem;
    border: 0;
    border-radius: 4px;
    outline: transparent solid 2px;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
      filter: brightness(0.9);
    }

    &:focus-within {
      outline-color: ${(props) => props.theme['green-500']};
    }
  }
`
