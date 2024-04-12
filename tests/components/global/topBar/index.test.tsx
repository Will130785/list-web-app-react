import React from 'react'
import { render, screen } from '@testing-library/react'
import TopBar from '../../../../src/components/global/topBar'

jest.mock('@tanstack/react-router', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}))

describe('topBar index', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('checks topbar renders', () => {
    render(<TopBar />)

    expect(screen.getByTestId('topBar')).toBeVisible()
  })
})
