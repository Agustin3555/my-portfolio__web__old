import { MAIN_GAP } from '@/styles'
import styled from 'styled-components'

const GAP = MAIN_GAP

export const Component = styled.section`
  display: flex;
  flex-direction: column;
  gap: calc(${GAP} * 2);
`
