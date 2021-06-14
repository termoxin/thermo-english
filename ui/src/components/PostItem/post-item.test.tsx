import React from 'react'

import { renderWithTheme as render } from '../../test-helpers/renderWithTheme'
import { labelStates } from '../Label'
import { PostItem } from '.'
import userEvent from '@testing-library/user-event'

const commonProps = {
  previewUrl: '/previewSample.jpeg',
  text: 'look',
}

describe('PostItem', () => {
  test('should render requested post correctly', () => {
    const requestedPostItemProps = {
      ...commonProps,
      state: 'requested' as labelStates,
    }

    const { getByText, getByRole, getByTestId, queryByTestId } = render(
      <PostItem {...requestedPostItemProps} />,
    )

    expect(getByText('look')).toBeInTheDocument()
    expect(getByRole('img')).toBeInTheDocument()

    expect(getByTestId('accept-post-button')).toBeInTheDocument()
    expect(getByTestId('reject-post-button')).toBeInTheDocument()
    expect(queryByTestId('edit-post-button')).not.toBeInTheDocument()
  })

  test('should invoke onRejectPost handler when click on cross icon', () => {
    const onRejectPost = jest.fn()

    const requestedPostItemProps = {
      ...commonProps,
      state: 'requested' as labelStates,
      onRejectPost,
    }

    const { getByTestId } = render(<PostItem {...requestedPostItemProps} />)

    userEvent.click(getByTestId('reject-post-button'))

    expect(onRejectPost).toBeCalledTimes(1)
  })

  test('should invoke onAcceptPost handler when click on tick icon', () => {
    const onAcceptPost = jest.fn()

    const requestedPostItemProps = {
      ...commonProps,
      state: 'requested' as labelStates,
      onAcceptPost,
    }

    const { getByTestId } = render(<PostItem {...requestedPostItemProps} />)

    userEvent.click(getByTestId('accept-post-button'))

    expect(onAcceptPost).toBeCalledTimes(1)
  })

  test('should invoke onEditPost handler when click on pencil icon', () => {
    const onEditPost = jest.fn()

    const draftPostItemProps = {
      ...commonProps,
      state: 'draft' as labelStates,
      onEditPost,
    }

    const { getByTestId, queryByTestId } = render(
      <PostItem {...draftPostItemProps} />,
    )

    expect(getByTestId('edit-post-button')).toBeInTheDocument()
    expect(queryByTestId('accept-post-button')).not.toBeInTheDocument()

    userEvent.click(getByTestId('edit-post-button'))

    expect(onEditPost).toBeCalledTimes(1)
  })

  test('should have likes in post item', () => {
    const draftPostItemProps = {
      ...commonProps,
      state: 'draft' as labelStates,
      likes: 10,
    }

    const { getByText } = render(<PostItem {...draftPostItemProps} />)

    expect(getByText('10 likes')).toBeInTheDocument()
  })
})
