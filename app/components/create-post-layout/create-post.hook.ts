import { Reducer, useReducer } from 'react'
import { setQuestionText, setReactions } from './create-post.actions'
import {
  createPostActionTypes,
  CreatePostPageState,
  createPostReducer,
} from './create-post.reducer'
import { ReactionOption } from 'ui'
import { propEq, reject } from 'ramda'

export const useCreatePost = (initialState: CreatePostPageState) => {
  const [state, dispatch] = useReducer<
    Reducer<CreatePostPageState, createPostActionTypes>
  >(createPostReducer, initialState)

  const actions = {
    setQuestion: (text: string) => dispatch(setQuestionText(text)),
    setReactions: (reactions: ReactionOption[]) =>
      dispatch(setReactions(reactions)),
    deleteReaction: (id: number) =>
      dispatch(
        setReactions(reject(propEq('id', id))(state.question.reactions)),
      ),
  }

  return { actions, state }
}
