import { InputFormContainer } from './styles'

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function InputForm({ label = '', ...rest }: InputFormProps) {
  return (
    <>
      <InputFormContainer>
        <label htmlFor={rest.id}>{label}</label>
        <input {...rest} />
      </InputFormContainer>
    </>
  )
}
