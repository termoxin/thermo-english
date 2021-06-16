import {
  setPreviewUrl,
  setQuestionText,
  setReactions,
  setSrc,
  setTranscript,
  setVideoUrl,
  setWordText,
} from './edit-post-layout.actions'
import { initialEditPostState } from './edit-post-layout.mock'
import { editPostReducer } from './edit-post-layout.reducer'

describe('create post reducer', () => {
  test('should set video src', () => {
    const newState = editPostReducer(initialEditPostState, setSrc('/video.mp4'))

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
    const newState = editPostReducer(
      initialEditPostState,
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
    const newState = editPostReducer(
      initialEditPostState,
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

    const newState = editPostReducer(
      initialEditPostState,
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
    const newState = editPostReducer(
      initialEditPostState,
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
    const newState = editPostReducer(
      initialEditPostState,
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

  test('should set word text', () => {
    const newState = editPostReducer(initialEditPostState, setWordText('get'))

    expect(newState).toEqual({
      wordText: 'get',
      videoUrl: '',
      previewUrl: '',
      transcript: ['', ''],
      question: {
        text: '',
        reactions: [],
      },
    })
  })
})
