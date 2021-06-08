import { setSrc } from './create-post.actions'
import { CreatePostPageState, createPostReducer } from './create-post.reducer'

describe('create post reducer', () => {
  const initialState: CreatePostPageState = {
    video: {
      src: '',
      previewUrl: '',
    },
    questionText: '',
    reactions: [],
    transcripts: ['', ''],
  }

  test('should set video src', () => {
    const newState = createPostReducer(setSrc('/video.mp4'), initialState)

    expect(newState).toEqual({
      video: {
        src: '/video.mp4',
        previewUrl: '',
      },
      questionText: '',
      reactions: [],
      transcripts: ['', ''],
    })
  })
})
