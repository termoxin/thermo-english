import { Reducer, useReducer } from 'react'
import { setQuestionText } from './create-post.actions'
import {
  createPostActionTypes,
  CreatePostPageState,
  createPostReducer,
} from './create-post.reducer'

export const useCreatePost = (initialState: CreatePostPageState) => {
  const [state, dispatch] = useReducer<
    Reducer<CreatePostPageState, createPostActionTypes>
  >(createPostReducer, initialState)

  const actions = {
    setQuestion: (text: string) => dispatch(setQuestionText(text)),
  }

  return { actions, state }
}
