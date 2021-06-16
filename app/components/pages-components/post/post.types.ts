import { ReactionOption } from 'ui'

import { ServerSideProps } from '../../../pages/post/[id]'

export interface Post {
  state?: string
  videoUrl: string
  previewUrl: string
  wordText: string
  meaning: string
  transcription: string
  transcript: [string, string]
  likes?: number
  question: {
    text: string
    reactions: ReactionOption[]
  }
}

export interface PostPageProps extends ServerSideProps {
  post: Post
  onChangeWord?: (wordText: string) => void
  onChangeQuestion?: (questionText: string) => void
  onChangeReactions?: (reactions: ReactionOption[]) => void
  onDeleteReaction?: (id: number) => void
  onChangeFirstTranscript?: (firstTranscript: string) => void
  onChangeSecondTranscript?: (secondTranscript: string) => void
  onUploadVideo?: (base64: string) => void
  onSave?: () => void
  onCancel?: () => void
  onSaveAsDraft?: () => void
}
