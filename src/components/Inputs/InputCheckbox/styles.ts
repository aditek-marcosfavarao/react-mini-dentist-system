import { styled } from 'styled-components'

export const InputCheckboxContainer = styled.label`
  /* display: block; */
  padding-top: 2px;
  padding-left: 2.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  user-select: none;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  position: relative;

  &:hover {
    input ~ span {
      background-color: ${(props) => props.theme['gray-300']};
    }
  }

  input {
    height: 0;
    width: 0;
    opacity: 0;
    cursor: pointer;
    overflow: hidden;
    position: absolute;
    border: 0;

    &:checked ~ span {
      background-color: ${(props) => props.theme['green-500']};
    }

    &:checked ~ span:after {
      display: block;
    }
  }

  span {
    background-color: ${(props) => props.theme['gray-200']};
    width: 25px;
    height: 25px;
    border: 1px solid ${(props) => props.theme['gray-300']};
    border-radius: 4px;
    overflow: hidden;

    position: absolute;
    top: 0;
    left: 0;

    &::after {
      content: '';
      width: 5px;
      height: 10px;
      border: 1px solid ${(props) => props.theme.white};
      border-width: 0 3px 3px 0;
      rotate: 45deg;

      display: none;
      position: absolute;
      left: 8px;
      top: 4px;
    }
  }
`
