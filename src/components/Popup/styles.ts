import styled from 'styled-components'

const BUTTON_COLOR = {
  green: 'green-500',
  red: 'danger-500',
  dark: 'dark',
} as const

export type VariantColor = keyof typeof BUTTON_COLOR

interface ButtonProps {
  variant: VariantColor
}

export const PopupWrapper = styled.div`
  .popupWrapper {
    display: flex;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .popup {
    /* width: 100%;
    max-width: 50vw;
    height: 100%;
    max-height: 60vh; */
    padding: 20px;
    background: #ffffff;
    position: relative;
    border-radius: 5px;

    h2 {
      text-align: start;
      line-height: 1.6;
    }
    .content {
      border: solid 2px ${(props) => props.theme['gray-200']};
      padding: 8px;
      min-height: 40vh;
      min-width: 40vw;
      max-width: 60rem;
      max-height: 60vh;
      overflow-y: auto;
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }

    .buttonCancel {
      border: none;
      border-radius: 5px;
      color: #ffffff;
      cursor: pointer;
      padding: 6px 10px;
      text-decoration: none;
      background: ${(props) => props.theme['gray-600']};
    }
  }
`

export const CustomButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  padding: 6px 10px;
  text-decoration: none;
  background-color: ${(props) => props.theme[BUTTON_COLOR[props.variant]]};
`
