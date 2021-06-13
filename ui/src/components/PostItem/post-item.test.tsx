import React from 'react'

import { renderWithTheme as render } from '../../test-helpers/renderWithTheme'
import { labelStates } from '../Label'
import { PostItem } from '.'

const commonProps = {
  previewUrl: '/previewSample.jpeg',
  text: 'look',
}

describe('PostItem', () => {
  test('should render requested correctly', () => {
    const requestedPostItemProps = {
      ...commonProps,
      state: 'requested' as labelStates,
    }

    const { getByText, getByRole, getByTestId } = render(
      <PostItem {...requestedPostItemProps} />,
    )

    expect(getByText('look')).toBeInTheDocument()
    expect(getByRole('img')).toBeInTheDocument()
    expect(getByTestId('accept-post-button')).toBeInTheDocument()
    expect(getByTestId('reject-post-button')).toBeInTheDocument()
  })
})
