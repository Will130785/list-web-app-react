import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddList from '../../../../src/components/pages/addList'

describe('pages addList index', () => {
  it('checks addList page renders', () => {
    render(<AddList />)

    expect(screen.getByTestId('addList')).toBeVisible()
  })

  it('checks List Name field renders', () => {
    render(<AddList />)

    expect(screen.getByText('List Name')).toBeVisible()
  })

  it('checks Add list item field is rendered', () => {
    render(<AddList />)

    expect(screen.getByText('Add list item')).toBeVisible()
  })

  it('checks add list item functions correctly', async () => {
    render(<AddList />)

    await userEvent.click(screen.getByText('+'))
    await userEvent.type(screen.getByText('Add list item'), 'Test')

    expect(screen.getByText('-')).toBeVisible()
  })
})
