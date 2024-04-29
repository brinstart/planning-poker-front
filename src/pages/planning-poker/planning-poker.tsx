import { Button } from 'primereact/button'
import React from 'react'
import styled from 'styled-components'

import Heading from '@/domain/common/heading'

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`

const PlanningPoker: React.FC = () => {
  return (
    <>
      <Heading/>
      <Wrapper>
        <Button label="Check" icon="pi pi-check" />
      </Wrapper>
    </>
  )
}

export default PlanningPoker
