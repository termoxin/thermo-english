import { VideoPlayerProps, ReactionOption } from 'ui'
import { lensPath, set } from 'ramda'

import { SET_SRC } from './create-post-action-names'
import * as actions from './create-post.actions'

type actionTypes = ReturnType<typeof actions[keyof typeof actions]>

export interface CreatePostPageState {
  video: VideoPlayerProps
  questionText: string
  reactions: ReactionOption[]
  transcripts: [string, string]
}

export const createPostReducer = (
  action: actionTypes,
  state: CreatePostPageState,
): CreatePostPageState => {
  switch (action.type) {
    case SET_SRC:
      return set(lensPath(['video', 'src']), action.payload)(state)
    default:
      return state
  }
}
