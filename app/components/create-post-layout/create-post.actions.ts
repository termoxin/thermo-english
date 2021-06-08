import { ReactionOption } from 'ui'

const SET_SRC = 'SET_SRC'
const SET_PREVIEW = 'SET_PREVIEW'
const SET_QUESTION_TEXT = 'SET_PREVIEW'
const SET_REACTIONS = 'SET_REACTIONS'
const SET_TRANSCRIPTS = 'SET_TRANSCRIPTS'

export const setSrc = (src: string) =>
  ({
    type: SET_SRC,
    payload: src,
  } as const)

export const setPreviewUrl = (previewUrl: string) =>
  ({
    type: SET_PREVIEW,
    payload: previewUrl,
  } as const)

export const setQuestionText = (text: string) =>
  ({
    type: SET_QUESTION_TEXT,
    payload: text,
  } as const)

export const setReactions = (reactions: ReactionOption[]) =>
  ({
    type: SET_REACTIONS,
    payload: reactions,
  } as const)

export const setTranscripts = (transcripts: [string, string]) =>
  ({
    type: SET_TRANSCRIPTS,
    payload: transcripts,
  } as const)
