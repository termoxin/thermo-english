import styled from 'styled-components'

import { Heading, Info } from '../Typography'

export const Content = styled.div`
  width: max-content;
  padding: 2rem 1rem 1rem 2rem;
`

export const Text = styled(Heading)`
  font-size: 2.4rem;

  span {
    font-size: 1.8rem;
    font-weight: 400;
  }
`

export const Meaning = styled(Info)`
  margin-top: 0.7rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
