import React from 'react'
import { render, screen } from '@testing-library/react'
import Router from '../../../src/router'
import Route from '../../../src/router/route'
import TestPage1 from './testComponents/testPage1'
import TestPage2 from './testComponents/testPage2'

describe('router', () => {
  it('checks test page 1 renders', async () => {
    window.history.pushState({}, '', '/')
    render(
      <Router>
        <Route path="/" component={<TestPage1 />} />
        <Route path="/test" component={<TestPage2 />} />
      </Router>
    )

    expect(screen.getByTestId('page1')).toBeVisible()
  })

  it('checks test page 2 renders', async () => {
    window.history.pushState({}, '', '/test')
    render(
      <Router>
        <Route path="/" component={<TestPage1 />} />
        <Route path="/test" component={<TestPage2 />} />
      </Router>
    )

    expect(screen.getByTestId('page2')).toBeVisible()
  })
})
