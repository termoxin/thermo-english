import {
  setPreviewUrl,
  setQuestionText,
  setReactions,
  setSrc,
  setTranscript,
  setVideoUrl,
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
      videoUrl: '/video.mp4',
      previewUrl: '',
      transcript: ['', ''],
      question: {
        text: '',
        reactions: [],
      },
    })
  })

  test('should set video preview url', () => {
    const newState = createPostReducer(
      initialCreatePostState,
      setPreviewUrl('/videoPreview.jpg'),
    )

    expect(newState).toEqual({
      videoUrl: '',
      previewUrl: '/videoPreview.jpg',
      transcript: ['', ''],
      question: {
        text: '',
        reactions: [],
      },
    })
  })

  test('should set question text', () => {
    const newState = createPostReducer(
      initialCreatePostState,
      setQuestionText('What do you think?'),
    )

    expect(newState).toEqual({
      videoUrl: '',
      previewUrl: '',
      transcript: ['', ''],
      question: {
        text: 'What do you think?',
        reactions: [],
      },
    })
  })

  test('should set reactions', () => {
    const newReactions = [{ id: 1, value: 'Yes', totalPeopleAnswered: 100 }]

    const newState = createPostReducer(
      initialCreatePostState,
      setReactions(newReactions),
    )

    expect(newState).toEqual({
      videoUrl: '',
      previewUrl: '',
      transcript: ['', ''],
      question: {
        text: '',
        reactions: newReactions,
      },
    })
  })

  test('should set transcript', () => {
    const newState = createPostReducer(
      initialCreatePostState,
      setTranscript(['hello', 'привет']),
    )

    expect(newState).toEqual({
      videoUrl: '',
      previewUrl: '',
      transcript: ['hello', 'привет'],
      question: {
        text: '',
        reactions: [],
      },
    })
  })

  test('should set video url', () => {
    const newState = createPostReducer(
      initialCreatePostState,
      setVideoUrl('/video.mp4'),
    )

    expect(newState).toEqual({
      videoUrl: '/video.mp4',
      previewUrl: '',
      transcript: ['', ''],
      question: {
        text: '',
        reactions: [],
      },
    })
  })
})
