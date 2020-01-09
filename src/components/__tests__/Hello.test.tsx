import React from 'react'

import { render, cleanup, getByText } from '@testing-library/react'
import Hello from '../Hello'

afterEach(cleanup)

describe('Hello Component', () => {
    it('displays Hello $name', () => {
        const { getByText } = render(<Hello name="adithya" />)
        const text = getByText(/hello/i)
        expect(text).toHaveTextContent("Hello adithya")
    })
})