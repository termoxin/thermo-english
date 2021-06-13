import { InputHTMLAttributes } from 'react'

import { labelStates } from '../Label'

export interface PostItemProps {
  previewUrl: string
  state: labelStates
  text: string
  onAcceptPost?: () => void
  onRejectPost?: () => void
}
