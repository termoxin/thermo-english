import { ReactionOption } from 'ui'
import { ServerSideProps } from '../../pages/posts/[id]'

export interface Post {
  state: string
  videoUrl: string
  previewUrl: string
  transcript: string[]
  likes: number
  question: {
    text: string
    reactions: ReactionOption[]
  }
}

export interface PostPageProps extends ServerSideProps {
  post: Post
}
