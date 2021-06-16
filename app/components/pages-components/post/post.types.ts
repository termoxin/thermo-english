import { ReactionOption } from 'ui'

import { ServerSideProps } from '../../../pages/post/[id]'

export interface Post {
  state?: string
  videoUrl: string
  previewUrl: string
  text: string
  transcript: [string, string]
  likes?: number
  question: {
    text: string
    reactions: ReactionOption[]
  }
}

export interface PostPageProps extends ServerSideProps {
  post: Post
  onChangeQuestion?: (value: string) => void
  onChangeReactions?: (reactions: ReactionOption[]) => void
  onDeleteReaction?: (id: number) => void
  onChangeFirstTranscript?: (value: string) => void
  onChangeSecondTranscript?: (value: string) => void
  onUploadVideo?: (base64: string) => void
  onSave?: () => void
  onCancel?: () => void
  onSaveAsDraft?: () => void
}
