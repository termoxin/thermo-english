import { CreatePostPageState } from './create-post.reducer'

export const initialCreatePostState: CreatePostPageState = {
  video: {
    src: '',
    previewUrl: '',
  },
  questionText: '',
  reactions: [],
  transcripts: ['', ''],
}
