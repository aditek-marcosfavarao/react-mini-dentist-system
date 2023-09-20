import styled from 'styled-components'

export const EditionContainer = styled.div`
  background-color: ${(props) => props.theme.white};
`

export const EditionDisplay = styled.div`
  background-color: ${(props) => props.theme.white};
  max-width: 50rem;
  margin: 0 auto;
  margin-top: 2rem;
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

export const Avatar = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 50%;
  position: relative;
  outline: ${(props) => props.theme['green-500']} 2px solid;

  &::after {
    content: 'M';
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

export const EditionContent = styled.form`
  width: 100%;
  padding: 1rem;
`

export const ContentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentBlock = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.6;
  }
`
