import React from 'react'
import { render, screen } from '@testing-library/react'
import AddList from '../../../../src/components/pages/addList'

describe('pages addList index', () => {
  it('checks addList page renders', () => {
    render(<AddList />)

    expect(screen.getByTestId('addList')).toBeVisible()
  })
})
