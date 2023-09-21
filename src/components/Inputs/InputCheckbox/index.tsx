import { InputCheckboxContainer } from './styles'

type InputHTMLType = React.InputHTMLAttributes<HTMLInputElement>
type InputCheckboxType = Omit<InputHTMLType, 'type'>

interface InputCheckboxProps extends InputCheckboxType {
  label?: string
}

export function InputCheckbox({ label = '', ...rest }: InputCheckboxProps) {
  return (
    <>
      <InputCheckboxContainer htmlFor={rest.id}>
        {label}
        <input type="checkbox" {...rest} />
        <span />
      </InputCheckboxContainer>
    </>
  )
}
