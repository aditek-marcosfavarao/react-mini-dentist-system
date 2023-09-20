import { InputLoginContainer, InputProperties } from './styles'

interface InputLoginProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  cursorPointerOnHoverIcon?: boolean
  iconLeft?: () => void
  iconRight?: () => void
}

export function InputLogin({
  label = '',
  cursorPointerOnHoverIcon = false,
  iconLeft,
  iconRight,
  ...rest
}: InputLoginProps) {
  return (
    <>
      <InputLoginContainer>
        <label htmlFor={rest.id}>{label}</label>

        <InputProperties cursorPointerOnHoverIcon={cursorPointerOnHoverIcon}>
          {iconLeft && <>{iconLeft()}</>}
          <input {...rest} />
          {iconRight && <>{iconRight()}</>}
        </InputProperties>
      </InputLoginContainer>
    </>
  )
}
