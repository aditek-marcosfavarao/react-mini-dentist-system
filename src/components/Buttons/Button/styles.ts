import styled from 'styled-components'

export const ButtonContainer = styled.div`
  button {
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    width: 100%;
    padding: 0.5rem 1.5rem;
    border: 0;
    border-radius: 4px;
    outline: transparent solid 2px;
    text-align: center;
    font-size: 1rem;
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
