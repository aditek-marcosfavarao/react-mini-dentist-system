import styled from 'styled-components'

export const DashboardContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  position: relative;
  height: calc(100vh - 5.6rem);
`

export const DashboardNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(58, 175, 131, 0.1);
  border-bottom: 2px solid rgba(58, 175, 131, 0.15);

  .buttonNavigate {
    width: 35px;
    height: 35px;
    margin: 10px 25px;
    padding: 4px;
    border-radius: 100%;
    border: solid 0.2rem ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['green-500']};
    cursor: pointer;
  }
`

export const IconPatient = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
`
export const CirclePatient = styled.div`
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
`
export const NamePatient = styled.h3`
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
  .iconDeletCard {
    z-index: 1;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    color: ${(props) => props.theme['green-500']};
    size: 20px;
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
export const Avatar = styled.div`
  background-color: #d9d9d9;
  width: 17rem;
  height: 17rem;
  border-radius: 100%;
  position: relative;
  outline: ${(props) => props.theme['green-500']} 2px solid;
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
