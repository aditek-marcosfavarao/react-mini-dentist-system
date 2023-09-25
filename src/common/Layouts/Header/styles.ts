import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['green-500']};
  width: 100%;
  padding: 1rem;
  box-shadow: 0 2px 4px 0 ${(props) => props.theme['gray-300']};

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
  .teste {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  svg {
    justify-content: center;
    align-items: center;
    margin: auto;
    cursor: pointer;
  }
`

export const HeaderLoginInfo = styled.div`
  color: ${(props) => props.theme.white};

  h1 {
    font-size: 1.5rem;
    line-height: 1.6;
    text-align: right;
  }

  time {
    display: block;
    font-size: 0.75rem;
    line-height: 1.6;
    text-align: right;
  }
`
