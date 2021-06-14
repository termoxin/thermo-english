import { labelStates } from '../Label'

export interface PostItemProps {
  previewUrl: string
  state: labelStates
  text: string
  likes?: number
  onAcceptPost?: () => void
  onRejectPost?: () => void
  onEditPost?: () => void
}
