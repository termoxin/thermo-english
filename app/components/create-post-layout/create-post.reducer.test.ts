import {
  setPreviewUrl,
  setQuestionText,
  setReactions,
  setSrc,
  setTranscripts,
} from './create-post.actions'
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

  test('should set video preview url', () => {
    const newState = createPostReducer(
      setPreviewUrl('/videoPreview.jpg'),
      initialState,
    )

    expect(newState).toEqual({
      video: {
        src: '',
        previewUrl: '/videoPreview.jpg',
      },
      questionText: '',
      reactions: [],
      transcripts: ['', ''],
    })
  })

  test('should set question text', () => {
    const newState = createPostReducer(
      setQuestionText('What do you think?'),
      initialState,
    )

    expect(newState).toEqual({
      video: {
        src: '',
        previewUrl: '',
      },
      questionText: 'What do you think?',
      reactions: [],
      transcripts: ['', ''],
    })
  })

  test('should set reactions', () => {
    const newReactions = [{ id: 1, value: 'Yes', totalPeopleAnswered: 100 }]

    const newState = createPostReducer(setReactions(newReactions), initialState)

    expect(newState).toEqual({
      video: {
        src: '',
        previewUrl: '',
      },
      questionText: '',
      reactions: newReactions,
      transcripts: ['', ''],
    })
  })

  test('should set transcript ', () => {
    const newState = createPostReducer(
      setTranscripts(['hello', 'привет']),
      initialState,
    )

    expect(newState).toEqual({
      video: {
        src: '',
        previewUrl: '',
      },
      questionText: '',
      reactions: [],
      transcripts: ['hello', 'привет'],
    })
  })
})
