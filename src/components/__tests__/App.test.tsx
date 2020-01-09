import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import App from '../App';

afterAll(cleanup)

beforeEach(() => {
  render(<App />)
})

describe('Login functionality', () => {

  it('shows error message when user enters no input', () => {

    fireEvent.click(screen.getByText('Login'))

    let message = screen.getByRole('message')

    expect(message).toHaveTextContent(/invalid/i)

  })

  it('shows success message when user enters valid input', async () => {

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: {value: 'Mike'}
    })

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: {value: 'Wazowski'}
    })

    fireEvent.click(screen.getByText(/login/i))
    
    let message = await screen.getByRole('message')

    expect(message).toHaveTextContent(/logged in/i)

  })

})
