import { ComponentProps, ComponentRef, forwardRef } from 'react'
import { Input, Prefix, Sufix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  sufix?: string
}

export const TextInput = forwardRef<ComponentRef<typeof Input>>(
  ({ prefix, sufix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
        {!!sufix && <Sufix>{sufix}</Sufix>}
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
