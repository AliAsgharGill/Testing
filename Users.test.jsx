import React from 'react'
import { render, screen } from '@testing-library/react'
import Users from './src/components/Users'
import '@testing-library/jest-dom'

test('test headiang', () => {
    render(<Users />)

    const el = screen.getByText(/Users/i)
    expect(el).toBeInTheDocument()
})

test('should render mock api', async () => {
    render(<Users />)
    const el2 = await screen.findAllByRole("listitem")
    expect(el2).toHaveLength(10)
})
