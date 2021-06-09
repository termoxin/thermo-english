import { ReactionOption } from 'ui'
import { lensPath, set } from 'ramda'

import {
  SET_PREVIEW,
  SET_QUESTION_TEXT,
  SET_REACTIONS,
  SET_SRC,
  SET_TRANSCRIPTS,
  SET_VIDEO_URL,
} from './create-post-action-names'
import * as actions from './create-post.actions'
import { Reducer } from 'react'

export type createPostActionTypes = ReturnType<
  typeof actions[keyof typeof actions]
>

export interface CreatePostPageState {
  previewUrl: string
  videoUrl: string
  transcript: [string, string]
  question: {
    text: string
    reactions: ReactionOption[]
  }
}

export const createPostReducer: Reducer<
  CreatePostPageState,
  createPostActionTypes
> = (state, action): CreatePostPageState => {
  switch (action.type) {
    case SET_SRC:
      return set(lensPath(['videoUrl']), action.payload)(state)
    case SET_PREVIEW:
      return set(lensPath(['previewUrl']), action.payload)(state)
    case SET_VIDEO_URL:
      return set(lensPath(['videoUrl']), action.payload)(state)
    case SET_QUESTION_TEXT:
      return set(lensPath(['question', 'text']), action.payload)(state)
    case SET_REACTIONS:
      return set(lensPath(['question', 'reactions']), action.payload)(state)
    case SET_TRANSCRIPTS:
      return set(lensPath(['transcript']), action.payload)(state)
    default:
      return state
  }
}
