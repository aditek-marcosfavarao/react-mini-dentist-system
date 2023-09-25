import { ButtonVariant, ButtonContainer } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string
  buttonColor?: ButtonVariant
}

export function Button({
  buttonName = '',
  buttonColor = 'gray',
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
