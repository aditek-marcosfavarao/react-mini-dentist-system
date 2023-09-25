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
    margin: 1rem;
    padding: 1.25rem;
    background: #ffffff;
    position: relative;
    border-radius: 5px;

    h2 {
      text-align: start;
      line-height: 1.6;
    }
    .content {
      border: solid 2px ${(props) => props.theme['gray-200']};
      padding: 0.5rem;
      min-height: 40vh;
      min-width: 40vw;
      max-width: 60rem;
      max-height: 60vh;
      overflow-y: auto;
      margin-bottom: 0.5rem;
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
      gap: 0.6rem;
    }

    .buttonCancel {
      border: none;
      border-radius: 5px;
      color: #ffffff;
      cursor: pointer;
      padding: 6px 10px;
      text-decoration: none;
      background: ${(props) => props.theme['gray-500']};
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
