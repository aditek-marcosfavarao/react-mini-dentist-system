import styled from 'styled-components'

export const ButtonContainer = styled.div`
  button {
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    width: 100%;
    height: 2rem;
    border: 0;
    border-radius: 4px;
    outline: transparent solid 2px;
    text-align: center;
    font-size: bold;
    text-transform: uppercase;

    &:hover {
      filter: brightness(0.9);
    }

    &:focus-within {
      outline-color: ${(props) => props.theme['green-500']};
    }
  }
`
