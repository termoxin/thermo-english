import { ReactionOption } from 'ui'
import * as actions from './edit-post-layout.actions'

export type editPostActionTypes = ReturnType<
  typeof actions[keyof typeof actions]
>

export interface EditPostPageState {
  previewUrl: string
  videoUrl: string
  transcript: [string, string]
  question: {
    text: string
    reactions: ReactionOption[]
  }
}
