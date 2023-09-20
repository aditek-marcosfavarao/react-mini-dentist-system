import styled from 'styled-components'

export const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.6;
  }

  input {
    background-color: ${(props) => props.theme['gray-200']};
    color: ${(props) => props.theme.dark};
    padding: 0.25rem 0.5rem;
    border: 1px solid ${(props) => props.theme['gray-300']};
    border-radius: 4px;
    outline: 0;

    &:focus {
      /* outline: ${(props) => props.theme['green-500']} 1px solid; */
      border-color: ${(props) => props.theme['green-500']};
    }
  }
`
