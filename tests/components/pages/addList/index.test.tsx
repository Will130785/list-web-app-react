import React from 'react'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'
import AddList from '../../../../src/components/pages/addList'

jest.mock('@tanstack/react-router', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}))

const queryClient = new QueryClient()

describe('pages addList index', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('checks addList page renders', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AddList />
      </QueryClientProvider>
    )

    expect(screen.getByTestId('addList')).toBeVisible()
  })

  it('checks List Name field renders', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AddList />
      </QueryClientProvider>
    )

    expect(screen.getByText('List Name')).toBeVisible()
  })

  it('checks Add list item field is rendered', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AddList />
      </QueryClientProvider>
    )

    expect(screen.getByText('Add list item')).toBeVisible()
  })

  it('checks add list item functions correctly', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AddList />
      </QueryClientProvider>
    )

    await userEvent.click(screen.getByText('+'))
    await userEvent.type(screen.getByText('Add list item'), 'Test')

    expect(screen.getByText('-')).toBeVisible()
  })
})
