import { Reducer, useReducer } from 'react'
import {
  setQuestionText,
  setReactions,
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

  const actions = {
    setQuestion: (text: string) => dispatch(setQuestionText(text)),
    setReactions: (reactions: ReactionOption[]) =>
      dispatch(setReactions(reactions)),
    deleteReaction: (id: number) =>
      dispatch(
        setReactions(reject(propEq('id', id))(state.question.reactions)),
      ),
    setFirstTranscript: (value: string) =>
      dispatch(
        setTranscript(
          set(lensIndex<string>(0), value)(state.transcript) as [
            string,
            string,
          ],
        ),
      ),
    setSecondTranscript: (value: string) =>
      dispatch(
        setTranscript(
          set(lensIndex<string>(1), value)(state.transcript) as [
            string,
            string,
          ],
        ),
      ),
  }

  return { actions, state }
}
