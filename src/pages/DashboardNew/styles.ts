import styled from 'styled-components'

export const DashboardContainer = styled.div`
  background-color: ${(props) => props.theme.white};
`

export const Navbar = styled.nav`
  background-color: ${(props) => props.theme.white};
  padding: 1rem;

  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-bottom-color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) => props.theme['green-500']};
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['green-500']};
      filter: brightness(0.9);
    }
  }
`

export const NavbarList = styled.div`
  flex: 1;
  margin: 0 1rem;

  display: flex;
  align-items: center;
  gap: 2rem;
`

export const NavItem = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.dark};
  border: 0;
  cursor: pointer;
  padding: 0.25rem;

  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  font-size: 1rem;
  font-weight: 600;
  line-height: 1.6;

  &:focus-within {
    outline: ${(props) => props.theme['green-500']} 2px solid;
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:before {
    content: '';
    background-color: ${(props) => props.theme['gray-200']};
    width: 2rem;
    height: 2rem;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 50%;
  }

  &:after {
    content: 'M';
    color: ${(props) => props.theme['green-500']};
    position: absolute;
    left: 50%;
    top: calc(50% - 0.7rem);
    transform: translate(-50%, -50%);

    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.6;
  }
`

export const Card = styled.main`
  background-color: ${(props) => props.theme.white};
  width: 50rem;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme['green-500']};
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  /* &::before {
    content: '';
    background-color: ${(props) => props.theme['green-500']};
    width: 24rem;
    height: 20rem;
    padding: 1rem;

    position: absolute;
    top: 0;
    left: -16rem;
    rotate: 70deg;
  } */
`

export const CardDetails = styled.div`
  background-color: ${(props) => props.theme.white};

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.6;
  }

  h4 {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.6;
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
