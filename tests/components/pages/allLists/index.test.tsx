/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AllLists from '../../../../src/components/pages/allLists'
import lists from '../../../data/lists.json'

// const server = setupServer(
//   http.get(
//     'http://localhost:3000/list-node-api/all-lists',
//     ({ request, params, cookies }) => {
//       return HttpResponse.json({
//         lists,
//       })
//     }
//   )
// )

jest.mock('@tanstack/react-router', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}))

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

describe('pages allLists index', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    cleanup()
  })

  it('checks loading component renders', () => {
    const queryClient = new QueryClient()
    const server = setupServer(
      http.get(
        'http://localhost:3000/list-node-api/all-lists',
        ({ request, params, cookies }) => {
          return HttpResponse.json({
            lists,
          })
        }
      )
    )
    server.listen()
    render(
      <QueryClientProvider client={queryClient}>
        <AllLists />
      </QueryClientProvider>
    )

    expect(screen.getByTestId('allListsLoading')).toBeVisible()
    server.resetHandlers()
    server.close()
  })

  it('checks all lists component renders', async () => {
    const queryClient = new QueryClient()
    const server = setupServer(
      http.get(
        'http://localhost:3000/list-node-api/all-lists',
        ({ request, params, cookies }) => {
          return HttpResponse.json({
            lists,
          })
        }
      )
    )
    server.listen()
    render(
      <QueryClientProvider client={queryClient}>
        <AllLists />
      </QueryClientProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('allLists')).toBeVisible()
      server.resetHandlers()
      server.close()
    })
  })

  it('checks error component renders', async () => {
    const queryClient = new QueryClient()
    const server = setupServer(
      http.get(
        'http://localhost:3000/list-node-api/all-lists',
        ({ request, params, cookies }) => {
          return HttpResponse.error()
        }
      )
    )
    server.listen()
    render(
      <QueryClientProvider client={queryClient}>
        <AllLists />
      </QueryClientProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('allListsError')).toBeVisible()
      server.resetHandlers()
      server.close()
    })
  })
})
