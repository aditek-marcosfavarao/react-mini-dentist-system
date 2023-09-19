import { ButtonContainer } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string
}

export function Button({ buttonName = '', ...rest }: ButtonProps) {
  return (
    <>
      <ButtonContainer>
        <button {...rest}>{buttonName}</button>
      </ButtonContainer>
    </>
  )
}
