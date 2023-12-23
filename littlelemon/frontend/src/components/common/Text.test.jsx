import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Text from './Text'

describe('App', () => {
  it('Vite to be in document', () => {
    render(<Text />)
    expect(screen.getByText('Vite')).toBeInTheDocument()
  })
})