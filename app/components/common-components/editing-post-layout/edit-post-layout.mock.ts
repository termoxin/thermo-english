import { EditPostPageState } from './edit-post-layout.types'

export const initialEditPostState: EditPostPageState = {
  wordText: '',
  videoUrl: '',
  previewUrl: '',
  transcript: ['', ''],
  question: {
    text: '',
    reactions: [],
  },
}
