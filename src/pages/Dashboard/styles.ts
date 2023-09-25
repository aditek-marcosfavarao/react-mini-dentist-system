import styled, { css } from 'styled-components'

interface DashboardNavbarProps {
  hasHeaderContent: boolean
}

interface UsersAligmentProps {
  hasManyProfiles: boolean
}

interface LetterProps {
  contentLetter: string
}

interface AvatarProps {
  contentLetter?: string
}

export const DashboardContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  position: relative;
  height: calc(100vh - 5.6rem);
  margin-bottom: 4rem;
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

  svg {
    background-color: transparent;
    width: 35px;
    height: 35px;
    margin: 0 0.1rem;
    padding: 4px;
    border-radius: 100%;
    border: solid 0.2rem ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['green-500']};
    cursor: pointer;

    stroke: ${(props) => props.theme['green-500']};
    stroke-width: 8px;
  }
`

export const UsersAligment = styled.div<UsersAligmentProps>`
  flex: 1;
  margin: 0 1rem;
  display: flex;
  justify-content: ${(props) =>
    props.hasManyProfiles ? 'space-between' : 'center'};
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

export const CirclePatient = styled.div<LetterProps>`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin: 5px 0px;
  border-radius: 100%;
  color: ${(props) => props.theme['green-500']};
  background-color: #d9d9d9;
  position: relative;

  &::after {
    content: '${(props) => props.contentLetter}';

    color: ${(props) => props.theme['green-500']};

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    font-size: 2rem;
    font-weight: 700;
    line-height: 1.6;
  }
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
  margin-top: 50px;
  background-color: ${(props) => props.theme.white};
  width: 80rem;
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

  .iconEditCard {
    z-index: 1;
    position: absolute;
    top: 1rem;
    right: 3rem;
    cursor: pointer;
    color: ${(props) => props.theme['green-500']};
  }
`
export const Avatar = styled.div<LetterProps>`
  background-color: #d9d9d9;
  width: 17rem;
  height: 17rem;
  border-radius: 100%;
  position: relative;
  outline: ${(props) => props.theme['green-500']} 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['green-500']};
  font-size: 3rem;

  &::after {
    content: '${(props) => props.contentLetter}';

    color: ${(props) => props.theme['green-500']};

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    font-size: 5rem;
    font-weight: 700;
    line-height: 1.6;
  }
`
export const Info = styled.div`
  background-color: ${(props) => props.theme.white};
  flex: 1;
  margin: 2rem;
  h1 {
    font-size: 3rem;
    line-height: 1.6;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.6;
    color: ${(props) => props.theme['green-500']};
  }
  div {
    display: flex;
    flex-direction: row;
    margin-top: 4rem;
    gap: 7rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.6;
  }
`

export const CardInfoIcons = styled.div`
  svg {
    color: ${(props) => props.theme['green-500']};
    width: 1.5rem;
    height: 1.5rem;
    /* size: 20px; */
    z-index: 1;

    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;

    stroke: ${(props) => props.theme['green-500']};
    stroke-width: 8px;
  }
`

export const ModalContent = styled.div`
  span {
    color: ${(props) => props.theme['danger-500']};
  }
`

export const DashboardContent = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`

export const Card = styled.div`
  background-color: ${(props) => props.theme.white};
  background-color: orange;
  width: 50rem;
  height: 15rem;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme['green-500']};
  border-radius: 8px;
  box-shadow: 0 0 2px 1px ${(props) => props.theme['gray-300']};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    background-color: ${(props) => props.theme['green-500']};
    width: 32rem;
    height: 10rem;
    padding: 1rem;
    position: absolute;
    top: 0;
    left: -17rem;
    rotate: 60deg;
  }
`

export const CardHeader = styled.header`
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

export const CardInfo = styled.div`
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

export const AvatarCard = styled.div<AvatarProps>`
  background-color: ${(props) => props.theme.white};
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 50%;
  position: relative;
  outline: ${(props) => props.theme['green-500']} 2px solid;

  &::after {
    content: '${(props) => String(props.contentLetter)}';
    color: ${(props) => props.theme['green-500']};

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    font-size: 2rem;
    font-weight: 700;
    line-height: 1.6;
  }
`
