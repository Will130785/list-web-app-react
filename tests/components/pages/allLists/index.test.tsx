import React from 'react'
import { render, screen } from '@testing-library/react'
import AllLists from '../../../../src/components/pages/allLists'

describe('pages allLists index', () => {
  it('checks allLists page renders', () => {
    render(<AllLists />)

    expect(screen.getByTestId('allLists')).toBeVisible()
  })
})
