import React from 'react'
import { render } from '@testing-library/react'

import { FileUploader } from '.'
import userEvent from '@testing-library/user-event'

describe('FileUploader', () => {
  test('should render correctly', () => {
    const onSubmit = jest.fn()

    const { getByTestId, getByRole } = render(
      <FileUploader onSubmit={onSubmit} />,
    )

    expect(getByTestId('file-uploader')).toBeInTheDocument()
    expect(getByRole('form')).toBeInTheDocument()
  })

  test('should invoke onSubmit with file as argument', () => {
    const onSubmit = jest.fn()
    const file = new File(['hello'], 'hello.png', { type: 'image/png' })

    const { getByTestId } = render(
      <FileUploader onSubmit={(data) => onSubmit(data)} />,
    )

    userEvent.upload(getByTestId('file-uploader'), file)

    expect(
      (getByTestId('file-uploader') as HTMLInputElement).files?.[0],
    ).toStrictEqual(file)
  })
})
