import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from '@/app.tsx'

describe('given App', () => {
  describe('when render App', () => {
    it('should render the heading title correctly', () => {
      render(<App />)

      expect(screen.getByText(/planning poker/i))
    })
  })
})
