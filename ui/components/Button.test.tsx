import { render, screen } from '@testing-library/react'
import React from 'react'

import Button from './Button'

describe('Button', () => {
  test('should render correctly', () => {
    render(<Button>Button</Button>)

    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})
