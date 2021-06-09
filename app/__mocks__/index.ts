import { PostCardProps } from 'ui'
import { PostPageProps } from '../components/pages/post/post.types'

export const posts: PostCardProps[] = [
  {
    text: 'look',
    meaning:
      "an act of directing one's gaze in order to see someone or something",
    transcription: 'lʊk',
    videoUrl: './videoSample.mp4',
    previewUrl: './previewSample.jpeg',
  },
  {
    text: 'see',
    meaning:
      "an act of directing one's gaze in order to see someone or something",
    transcription: 'lʊk',
    videoUrl: './videoSample.mp4',
    previewUrl: './previewSample.jpeg',
  },
  {
    text: 'gaze',
    meaning:
      "an act of directing one's gaze in order to see someone or something",
    transcription: 'lʊk',
    videoUrl: './videoSample.mp4',
    previewUrl: './previewSample.jpeg',
  },
  {
    text: 'do',
    meaning:
      "an act of directing one's gaze in order to see someone or something",
    transcription: 'lʊk',
    videoUrl: './videoSample.mp4',
    previewUrl: './previewSample.jpeg',
  },
  {
    text: 'work',
    meaning:
      "an act of directing one's gaze in order to see someone or something",
    transcription: 'lʊk',
    videoUrl: './videoSample.mp4',
    previewUrl: './previewSample.jpeg',
  },
  {
    text: 'perform',
    meaning:
      "an act of directing one's gaze in order to see someone or something",
    transcription: 'lʊk',
    videoUrl: './videoSample.mp4',
    previewUrl: './previewSample.jpeg',
  },
]

export const postFilters = [
  { label: 'Popular', value: 'popular' },
  { label: 'Recent', value: 'recent' },
  { label: 'Oldest', value: 'oldest' },
]

export const options = [
  {
    id: 1,
    value: 'Yes',
    totalPeopleAnswered: 160,
  },
  {
    id: 2,
    value: 'No',
    totalPeopleAnswered: 30,
  },
  {
    id: 3,
    value: 'Maybe',
    totalPeopleAnswered: 10,
  },
]

export const expandedPosts: PostPageProps['post'][] = [
  {
    state: 'draft',
    videoUrl: '/videoSample.mp4',
    previewUrl: '/previewSample.jpeg',
    transcript: ['Hello, my name is Leela!', 'Привет, меня зовут Лила!'],
    question: {
      text: 'Do you believe Leela?',
      reactions: options,
    },
  },
  {
    state: 'published',
    videoUrl: '/videoSample.mp4',
    previewUrl: '/previewSample.jpeg',
    transcript: ['Hello, my name is Leela!', 'Привет, меня зовут Лила!'],
    question: {
      text: 'Do you know Leela?',
      reactions: options,
    },
    likes: 941,
  },
  {
    state: 'requested',
    videoUrl: '/videoSample.mp4',
    previewUrl: '/previewSample.jpeg',
    transcript: ['Hello, my name is Leela!', 'Привет, меня зовут Лила!'],
    question: {
      text: "What's going on with Leela?",
      reactions: options,
    },
  },
  {
    state: 'draft',
    videoUrl: '/videoSample.mp4',
    previewUrl: '/previewSample.jpeg',
    transcript: ['', ''],
    question: {
      text: '',
      reactions: [],
    },
  },
]

export const postPagePropsMock: PostPageProps['post'] = {
  state: 'draft',
  videoUrl: '',
  previewUrl: '',
  question: {
    text: 'Do you think magic exists?',
    reactions: [{ id: 1, value: 'yes', totalPeopleAnswered: 0 }],
  },
  transcript: ['Here', 'Здесь'],
}
