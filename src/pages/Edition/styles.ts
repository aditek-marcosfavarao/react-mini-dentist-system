import styled from 'styled-components'

const INPUT_SIZE = {
  none: '',
  small: '8rem',
  medium: '16rem',
  extended: '100%',
} as const

export type InputSize = keyof typeof INPUT_SIZE

interface InputLabelProps {
  inputSize: InputSize
}

export const EditionContainer = styled.div`
  background-color: ${(props) => props.theme.white};
`

export const EditionDisplay = styled.div`
  background-color: ${(props) => props.theme.white};
  max-width: 60rem;
  margin: 1rem auto;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  overflow: hidden;
`

export const DisplayHeader = styled.header`
  background-color: ${(props) => props.theme.white};
  width: 100%;
  padding: 1rem;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};
  overflow: hidden;

  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '';
    background-color: ${(props) => props.theme['green-500']};
    width: 16rem;
    height: 16rem;
    position: absolute;
    top: 0;
    left: 0;
    rotate: 60deg;
    translate: -10rem 0 0;
  }
`

export const Info = styled.div`
  background-color: ${(props) => props.theme.white};
  flex: 1;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.6;

    span {
      color: ${(props) => props.theme['green-500']};
    }
  }

  time {
    color: ${(props) => props.theme['gray-400']};
    display: block;
    text-align: right;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.6;
  }
`

export const EditionContent = styled.form`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ContentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentBlock = styled.div`
  flex: 1;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.6;
  }

  textarea {
    color: ${(props) => props.theme.dark};
    width: 100%;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme['gray-300']};
    border-radius: 4px;
    outline: 0;

    &:not(:disabled):hover,
    &:not(:disabled):focus {
      border-color: ${(props) => props.theme['green-500']};
    }
  }
`

export const LineBreaker = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
`

export const InputLabel = styled.label<InputLabelProps>`
  width: ${(props) => props.inputSize && INPUT_SIZE[props.inputSize]};
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.6;
  }

  input {
    background-color: ${(props) => props.theme['gray-200']};
    color: ${(props) => props.theme.dark};
    width: 100%;
    border: 1px solid ${(props) => props.theme['gray-300']};
    border-radius: 4px;
    padding: 0.25rem 0.5rem; // espaçamento dentro do input
    outline: none;

    &:not(:disabled):hover,
    &:not(:disabled):focus {
      border-color: ${(props) => props.theme['green-500']};
    }
  }
`
