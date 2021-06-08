import { ReactionOption } from 'ui'
import {
  SET_SRC,
  SET_PREVIEW,
  SET_QUESTION_TEXT,
  SET_REACTIONS,
  SET_TRANSCRIPTS,
} from './create-post-action-names'

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
