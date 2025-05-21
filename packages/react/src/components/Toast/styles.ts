import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  '--viewport-padding': '25px',
  position: 'fixed',
  bottom: '0',
  right: '0',
  display: 'flex',
  flexDirection: 'column-reverse',
  padding: 'var(--viewport-padding)',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: '0',
  listStyle: 'none',
  zIndex: '2147483647',
  outline: 'none',
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$3 $5',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '$4',
  alignItems: 'center',

  '&[data-state="open"]': {
    animationName: slideIn,
    animation: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
  },

  '&[data-state="closed"]': {
    animationName: hide,
    animation: '100ms ease-in',
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animationName: swipeOut,
    animation: '100ms ease-out',
  },

  variants: {
    variant: {
      information: {
        color: '$white',
        background: '$gray800',
        border: '1px solid $gray600',

        '& > :not(:first-child)': {
          color: '$gray200',
        },
      },

      success: {
        color: '$gray700',
        background: '$success',
        border: '1px solid $gray200',

        '& > :not(:first-child)': {
          color: '$gray500',
        },
      },

      alert: {
        color: '$gray700',
        background: '$alert',
        border: '1px solid $gray200',

        '& > :not(:first-child)': {
          color: '$gray500',
        },
      },

      error: {
        color: '$gray700',
        background: '$error',
        border: '1px solid $gray200',

        '& > :not(:first-child)': {
          color: '$gray500',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'information',
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: '5px',
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  margin: 0,
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  borderRadius: '$sm',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: '$1',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  svg: {
    width: '$5',
    height: '$5',
  },

  '&:hover': {
    boxShadow: '0 0 0 1px $colors$gray400',
  },

  '&:focus': {
    boxShadow: '0 0 0 1px $colors$gray400',
  },
})
