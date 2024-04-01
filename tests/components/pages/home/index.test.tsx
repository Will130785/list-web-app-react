import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../../../../src/components/pages/home'

describe('pages home index', () => {
  it('checks homepage renders', () => {
    render(<Home />)

    expect(screen.getByTestId('homePage')).toBeVisible()
  })
})
