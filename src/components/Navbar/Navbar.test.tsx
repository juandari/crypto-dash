import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '.'

test('render Navbar component correctly', () => {
  render(<Navbar />)

  const logo = screen.getByRole('link', { name: /cryptodash/i })

  expect(logo).toBeInTheDocument()
})
