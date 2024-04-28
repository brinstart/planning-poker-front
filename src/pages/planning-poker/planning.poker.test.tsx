import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import PlanningPoker from '@/pages/planning-poker/planning-poker'

describe('given PlanningPoker component', () => {
  describe('when render PlanningPoker', () => {
    it('should render the heading title correctly', () => {
      render(<PlanningPoker />)

      expect(screen.getByText(/planning poker/i))
    })
  })
})
