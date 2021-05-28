import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.heading.color};
`

export const Info = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.typographyColor.info};
`

export const Paragraph = styled.p`
  font-size: 1.4rem;
`
