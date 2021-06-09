import { EditPostPageState } from './create-post-layout.reducer'

export const initialEditPostState: EditPostPageState = {
  videoUrl: '',
  previewUrl: '',
  transcript: ['', ''],
  question: {
    text: '',
    reactions: [],
  },
}
