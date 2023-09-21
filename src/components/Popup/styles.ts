import styled from 'styled-components'

export const PopupWrapper = styled.div`
  .popupWrapper {
    display: none;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .popup {
    text-align: center;
    width: 100%;
    max-width: 300px;
    margin: 25% auto;
    padding: 20px;
    background: #ffffff;
    position: relative;

    a {
      color: #ffffff;
      cursor: pointer;
      padding: 6px 10px;
      text-decoration: none;
      background: ${(props) => props.theme['green-500']};
    }
  }
`
