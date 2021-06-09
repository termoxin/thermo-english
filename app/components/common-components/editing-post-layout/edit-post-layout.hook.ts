import { Reducer, useReducer } from 'react'
import { ReactionOption } from 'ui'
import { lensIndex, propEq, reject, set } from 'ramda'

import {
  setQuestionText,
  setReactions as changeReactions,
  setTranscript,
  setVideoUrl as changeVideoUrl,
} from './edit-post-layout.actions'
import { editPostReducer } from './edit-post-layout.reducer'
import {
  editPostActionTypes,
  EditPostPageState,
} from './edit-post-layout.types'

import { initialEditPostState } from './edit-post-layout.mock'

export const useEditPost = (initialState?: EditPostPageState) => {
  const [state, dispatch] = useReducer<
    Reducer<EditPostPageState, editPostActionTypes>
  >(editPostReducer, initialState || initialEditPostState)

  const setQuestion = (text: string) => dispatch(setQuestionText(text))

  const setReactions = (reactions: ReactionOption[]) =>
    dispatch(changeReactions(reactions))

  const deleteReaction = (id: number) =>
    dispatch(
      changeReactions(reject(propEq('id', id))(state.question.reactions)),
    )

  const setFirstTranscript = (value: string) =>
    dispatch(
      setTranscript(
        set(lensIndex<string>(0), value)(state.transcript) as [string, string],
      ),
    )

  const setSecondTranscript = (value: string) =>
    dispatch(
      setTranscript(
        set(lensIndex<string>(1), value)(state.transcript) as [string, string],
      ),
    )

  const setVideoUrl = (base64: string) => dispatch(changeVideoUrl(base64))

  const actions = {
    setQuestion,
    setReactions,
    deleteReaction,
    setFirstTranscript,
    setSecondTranscript,
    setVideoUrl,
  }

  return { actions, state }
}
