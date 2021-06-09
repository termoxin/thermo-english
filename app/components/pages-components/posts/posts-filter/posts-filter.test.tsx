import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { themes } from 'ui'

import PostsFilter from './posts-filter'

describe('PostsFilter component', () => {
  const props = {
    filters: [
      { label: 'Popular', value: 'popular' },
      { label: 'Recent', value: 'recent' },
      { label: 'Oldest', value: 'oldest' },
    ],
    onChangeFilter: jest.fn(),
  }

  test('should render correctly', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={themes.light}>
        <PostsFilter {...props} />
      </ThemeProvider>,
    )

    expect(getByText('Popular')).toBeInTheDocument()
    expect(getByText('Recent')).toBeInTheDocument()
    expect(getByText('Oldest')).toBeInTheDocument()
    expect(getByTestId('input-filter')).toBeInTheDocument()
  })

  test('should invoke onChangeFilter callback on button filter click', () => {
    const { getByText } = render(
      <ThemeProvider theme={themes.light}>
        <PostsFilter {...props} />
      </ThemeProvider>,
    )

    userEvent.click(getByText('Popular'))

    expect(props.onChangeFilter).toBeCalledTimes(1)
    expect(props.onChangeFilter.mock.calls[0][0]).toEqual({
      label: 'Popular',
      value: 'popular',
    })
  })

  test('should invoke onChangeFilter callback on search changes', () => {
    const onChangeFilter = jest.fn()

    const { getByTestId } = render(
      <ThemeProvider theme={themes.light}>
        <PostsFilter {...{ ...props, onChangeFilter }} />
      </ThemeProvider>,
    )

    userEvent.type(getByTestId('input-filter'), 'futurama')

    expect(onChangeFilter).toBeCalledTimes(8)

    expect(onChangeFilter.mock.calls[7][0]).toEqual({
      label: 'Search',
      value: 'futurama',
    })
  })
})
