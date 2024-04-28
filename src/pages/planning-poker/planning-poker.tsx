import { Button } from 'primereact/button'
import { Chips } from 'primereact/chips'
import React, { useState } from 'react'
import styled from 'styled-components'

import Heading from '@/domain/common/heading'

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`

const PlanningPoker: React.FC = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <>
      <Heading/>
      <Wrapper>
        <Chips value={value} onChange={(e) => { setValue(e?.value ?? []) }} />
        <Button label="Check" icon="pi pi-check" />
      </Wrapper>
    </>
  )
}

export default PlanningPoker
