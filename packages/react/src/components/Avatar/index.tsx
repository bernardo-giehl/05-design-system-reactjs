import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  let UserInitial = ''
  if (!!props.alt && props.alt !== '') {
    const palavras = props.alt.trim().split(' ')
    const iniciais = palavras.map((palavra) => palavra.charAt(0).toUpperCase())
    UserInitial = iniciais[0]
    if (iniciais.length > 1) {
      UserInitial += iniciais[iniciais.length - 1]
    }
  }

  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        {UserInitial !== '' ? <span>{UserInitial}</span> : <User />}
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
