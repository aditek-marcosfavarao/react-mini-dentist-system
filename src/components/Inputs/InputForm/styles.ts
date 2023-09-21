import styled from 'styled-components'

const INPUT_SIZE = {
  none: '',
  small: '8rem',
  medium: '16rem',
  extended: '100%',
} as const

export type InputSize = keyof typeof INPUT_SIZE

interface InputProps {
  size: InputSize
}

export const InputFormContainer = styled.div<InputProps>`
  width: ${(props) => props.size && INPUT_SIZE[props.size]};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.6;
    user-select: none;
  }

  input {
    background-color: ${(props) => props.theme['gray-200']};
    color: ${(props) => props.theme.dark};
    width: 100%;
    padding: 0.25rem 0.5rem;
    border: 1px solid ${(props) => props.theme['gray-300']};
    border-radius: 4px;
    outline: 0;

    &:focus {
      border-color: ${(props) => props.theme['green-500']};
    }
  }
`
