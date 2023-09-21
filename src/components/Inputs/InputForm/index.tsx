import { InputSize, InputFormContainer } from './styles'

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  inputSize?: InputSize
}

export function InputForm({
  label = '',
  inputSize = 'none',
  ...rest
}: InputFormProps) {
  return (
    <>
      <InputFormContainer size={inputSize}>
        <label htmlFor={rest.id}>{label}</label>
        <input {...rest} />
      </InputFormContainer>
    </>
  )
}
