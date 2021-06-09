import { Reducer, useReducer } from 'react'
import {
  setQuestionText,
  setReactions as changeReactions,
  setTranscript,
  setVideoUrl as changeVideoUrl,
} from './edit-post-layout.actions'
import {
  editPostActionTypes,
  EditPostPageState,
  createPostReducer,
} from './create-post-layout.reducer'
import { ReactionOption } from 'ui'
import { lensIndex, propEq, reject, set } from 'ramda'
import { initialEditPostState } from './create-post-layout.mock'

export const useEditPost = (initialState?: EditPostPageState) => {
  const [state, dispatch] = useReducer<
    Reducer<EditPostPageState, editPostActionTypes>
  >(createPostReducer, initialState || initialEditPostState)

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
