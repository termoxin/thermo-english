import { CreatePostPageState } from './create-post.reducer'

export const initialCreatePostState: CreatePostPageState = {
  videoUrl: '',
  previewUrl: '',
  transcript: ['', ''],
  question: {
    text: '',
    reactions: [],
  },
}
