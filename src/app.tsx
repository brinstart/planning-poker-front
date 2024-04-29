import { PrimeReactProvider } from 'primereact/api'
import React from 'react'
import 'primereact/resources/themes/lara-light-cyan/theme.css'

import PlanningPoker from '@/pages/planning-poker/planning-poker'
import '@/app.css'

const App: React.FC = () => {
  return (
    <PrimeReactProvider>
      <PlanningPoker />
    </PrimeReactProvider>
  )
}

export default App
