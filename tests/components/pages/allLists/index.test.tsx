import React from 'react'
import { render, screen } from '@testing-library/react'
import AllLists from '../../../../src/components/pages/allLists'

jest.mock('@tanstack/react-router', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}))

describe('pages allLists index', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('checks allLists page renders', () => {
    render(<AllLists />)

    expect(screen.getByTestId('allLists')).toBeVisible()
  })
})
