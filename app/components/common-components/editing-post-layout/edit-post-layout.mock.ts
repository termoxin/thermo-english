import { EditPostPageState } from './edit-post-layout.types'

export const initialEditPostState: EditPostPageState = {
  videoUrl: '',
  previewUrl: '',
  transcript: ['', ''],
  question: {
    text: '',
    reactions: [],
  },
}
