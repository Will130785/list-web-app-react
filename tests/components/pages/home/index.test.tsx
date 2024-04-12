import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../../../../src/components/pages/home'

jest.mock('@tanstack/react-router', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}))

describe('pages home index', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('checks homepage renders', () => {
    render(<Home />)

    expect(screen.getByTestId('homePage')).toBeVisible()
  })
})
