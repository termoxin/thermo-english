import { ReactionOption } from 'ui'
import {
  SET_SRC,
  SET_PREVIEW,
  SET_QUESTION_TEXT,
  SET_REACTIONS,
  SET_TRANSCRIPTS,
  SET_VIDEO_URL,
} from './edit-post-layout.action-names'

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

export const setVideoUrl = (videoUrl: string) =>
  ({
    type: SET_VIDEO_URL,
    payload: videoUrl,
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

export const setTranscript = (transcript: [string, string]) =>
  ({
    type: SET_TRANSCRIPTS,
    payload: transcript,
  } as const)
