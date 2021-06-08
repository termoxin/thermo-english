import {
  setPreviewUrl,
  setQuestionText,
  setReactions,
  setSrc,
  setTranscripts,
} from './create-post.actions'
import { initialCreatePostState } from './create-post.mock'
import { createPostReducer } from './create-post.reducer'

describe('create post reducer', () => {
  test('should set video src', () => {
    const newState = createPostReducer(
      initialCreatePostState,
      setSrc('/video.mp4'),
    )

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
      initialCreatePostState,
      setPreviewUrl('/videoPreview.jpg'),
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
      initialCreatePostState,
      setQuestionText('What do you think?'),
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

    const newState = createPostReducer(
      initialCreatePostState,
      setReactions(newReactions),
    )

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
      initialCreatePostState,
      setTranscripts(['hello', 'привет']),
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
