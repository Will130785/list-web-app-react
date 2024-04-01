import React from 'react'
import { render, screen } from '@testing-library/react'
import TopBar from '../../../../src/components/global/topBar'

describe('topBar index', () => {
  it('checks topbar renders', () => {
    render(<TopBar />)

    expect(screen.getByTestId('topBar')).toBeVisible()
  })
})
