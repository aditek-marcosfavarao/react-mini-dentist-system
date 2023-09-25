import styled, { css } from 'styled-components'

interface DashboardNavbarProps {
  hasHeaderContent: boolean
}

export const DashboardContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  position: relative;
  height: calc(100vh - 5.6rem);
`

export const DashboardNavbar = styled.div<DashboardNavbarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(58, 175, 131, 0.1);
  border-bottom: 2px solid rgba(58, 175, 131, 0.15);

  ${(props) =>
    props.hasHeaderContent &&
    css`
      padding: 1rem;
    `}

  .buttonNavigate {
    background-color: transparent;
    width: 2rem;
    height: 2rem;
    margin: 0 0.1rem;
    padding: 0.1rem;
    border-radius: 100%;
    border: solid 0.2rem ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['green-500']};
    cursor: pointer;
  }
`

export const UsersAligment = styled.div`
  flex: 1;
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const IconPatient = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
`
export const NamePatient = styled.h3`
  width: 6rem;
  text-align: center;
  margin: 5px 0px;
  font-weight: bold;
`
export const DisplayHeader = styled.header`
  border: solid 2px ${(props) => props.theme['green-500']};
  border-radius: 5px;
  margin: auto;
  margin-top: 3rem;
  background-color: ${(props) => props.theme.white};
  width: 80vw;
  height: 20rem;
  padding: 1rem;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '';
    background-color: ${(props) => props.theme['green-500']};
    width: 30rem;
    height: 35rem;
    position: absolute;
    top: 0;
    left: 0;
    rotate: 60deg;
    translate: -20rem 0 0;
  }
  .iconDeletCard {
    z-index: 1;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    color: ${(props) => props.theme['green-500']};
  }
  .iconEditCard {
    z-index: 1;
    position: absolute;
    top: 1rem;
    right: 3rem;
    cursor: pointer;
    color: ${(props) => props.theme['green-500']};
  }

  @media (max-width: 480px) {
    padding: 0;
    height: auto;
    overflow: auto;

    display: block;

    &::before {
      content: '';
      width: 9rem;
      height: 20rem;
      background-color: ${(props) => props.theme['green-500']};
      position: absolute;
      top: 0;
      left: 0;
      rotate: 50deg;
      translate: 0 -10rem;
    }

    .icons {
      justify-content: space-evenly;
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 1rem;
    }

    .iconDeletCard {
      z-index: 1;
      position: relative;
      top: 0;
      right: 0;
      width: 3rem;
      height: 3rem;
      cursor: pointer;
      color: ${(props) => props.theme['green-500']};
    }
    .iconEditCard {
      z-index: 1;
      position: relative;
      top: 0;
      right: 0;
      width: 3rem;
      height: 3rem;
      cursor: pointer;
      color: ${(props) => props.theme['green-500']};
    }
  }
`

export const Info = styled.div`
  background-color: ${(props) => props.theme.white};
  flex: 1;
  margin: 2rem;

  .aligment {
    display: flex;
    flex-direction: row;
    margin-top: 4rem;
    gap: 7rem;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.6;
    position: relative;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.6;
    color: ${(props) => props.theme['green-500']};
    position: relative;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.6;
    position: relative;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.7rem;
      line-height: 1.6;
      position: relative;
    }
    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.6;
      color: ${(props) => props.theme['green-500']};
      position: relative;
    }

    .aligment {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    h3 {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.6;
      position: relative;
    }
  }
`
