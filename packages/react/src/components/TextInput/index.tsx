import { ComponentProps } from 'react'
import { Input, Prefix, Sufix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  sufix?: string
}

export function TextInput({ prefix, sufix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
      {!!sufix && <Sufix>{sufix}</Sufix>}
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
