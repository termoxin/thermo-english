import { Reducer, useReducer } from 'react'
import {
  setQuestionText,
  setReactions as changeReactions,
  setTranscript,
} from './create-post.actions'
import {
  createPostActionTypes,
  CreatePostPageState,
  createPostReducer,
} from './create-post.reducer'
import { ReactionOption } from 'ui'
import { lensIndex, propEq, reject, set } from 'ramda'
import { initialCreatePostState } from './create-post.mock'

export const useCreatePost = (initialState?: CreatePostPageState) => {
  const [state, dispatch] = useReducer<
    Reducer<CreatePostPageState, createPostActionTypes>
  >(createPostReducer, initialState || initialCreatePostState)

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

  const actions = {
    setQuestion,
    setReactions,
    deleteReaction,
    setFirstTranscript,
    setSecondTranscript,
  }

  return { actions, state }
}
