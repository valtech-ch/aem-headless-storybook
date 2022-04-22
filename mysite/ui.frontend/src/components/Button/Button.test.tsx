import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import React from 'react'

import * as stories from './Button.stories'

const { Primary, Text } = composeStories(stories)

test('Button: Primary', () => {
  render(<Primary />)

  const testIdElement = screen.getByTestId('primary-one-button')

  expect(testIdElement).toHaveTextContent('Searrrch')
})

test('Button: Text', () => {
  render(<Text />)

  const testIdElement = screen.getByTestId('text-one-button')

  expect(testIdElement).toHaveTextContent('Search')
})
