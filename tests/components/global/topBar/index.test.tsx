import React from 'react'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TopBar from '../../../../src/components/global/topBar'

jest.mock('@tanstack/react-router', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}))

const queryClient = new QueryClient()

describe('topBar index', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('checks topbar renders', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TopBar />
      </QueryClientProvider>
    )

    expect(screen.getByTestId('topBar')).toBeVisible()
  })
})
