import { PostCardProps } from 'ui'
import { Post } from '../components/pages-components/post/post.types'

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

export const expandedPosts: Post[] = [
  {
    wordText: '​​horrendous',
    state: 'draft',
    meaning:
      "an act of directing one's gaze in order to see someone or something",
    transcription: 'extremely unpleasant, horrifying, or terrible',
    videoUrl: '/videoSample.mp4',
    previewUrl: '/previewSample.jpeg',
    transcript: [
      `Never have a baby in your 60s.
Don't follow behind.
She's farted. It's horrendous.
Oh, God.
`,
      `Не вздумай заводить ребенка после 60.
И не иди за мной.
Она пукнула. Вонь ужасная.
Господи.
`,
    ],
    question: {
      text: 'Do you believe Leela?',
      reactions: options,
    },
  },
  {
    wordText: 'nonsense',
    state: 'published',
    meaning:
      "an act of directing one's gaze in order to see someone or something",
    transcription: 'lʊk',
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
    wordText: 'morbid',
    state: 'requested',
    meaning:
      "an act of directing one's gaze in order to see someone or something",
    transcription: 'lʊk',
    videoUrl: '/videoSample.mp4',
    previewUrl: '/previewSample.jpeg',
    transcript: ['Hello, my name is Leela!', 'Привет, меня зовут Лила!'],
    question: {
      text: "What's going on with Leela?",
      reactions: options,
    },
  },
  {
    wordText: 'gorgeous',
    state: 'draft',
    meaning:
      "an act of directing one's gaze in order to see someone or something",
    transcription: 'lʊk',
    videoUrl: '/videoSample.mp4',
    previewUrl: '/previewSample.jpeg',
    transcript: ['Something is here', ''],
    question: {
      text: '',
      reactions: [],
    },
  },
]

export const postPagePropsMock: Post = {
  state: 'draft',
  videoUrl: '',
  wordText: 'magic',
  meaning:
    "an act of directing one's gaze in order to see someone or something",
  transcription: 'lʊk',
  previewUrl: '',
  question: {
    text: 'Do you think magic exists?',
    reactions: [{ id: 1, value: 'yes', totalPeopleAnswered: 0 }],
  },
  transcript: ['Here', 'Здесь'],
}
