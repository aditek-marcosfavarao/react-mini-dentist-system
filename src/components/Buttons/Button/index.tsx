import { ButtonVariant, ButtonContainer } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string
  buttonColor?: ButtonVariant
}

export function Button({
  buttonName = '',
  buttonColor = 'dark',
  ...rest
}: ButtonProps) {
  return (
    <>
      <ButtonContainer buttonVariant={buttonColor}>
        <button {...rest}>{buttonName}</button>
      </ButtonContainer>
    </>
  )
}
