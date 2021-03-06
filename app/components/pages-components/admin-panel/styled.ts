import styled from 'styled-components'
import { Heading, breakpoints } from 'ui'

export const BaseStatusHeading = styled(Heading)`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 4rem;
`

export const RequestedHeading = styled(BaseStatusHeading)`
  color: ${({ theme }) => theme.colors.red};
`

export const DraftHeading = styled(BaseStatusHeading)`
  color: ${({ theme }) => theme.colors.orange};
`

export const PublishedHeading = styled(BaseStatusHeading)`
  color: ${({ theme }) => theme.colors.green};
`

export const PostItemWrapper = styled.div``

export const PostsColumn = styled.div`
  ${PostItemWrapper}:not(:first-child) {
    margin-top: 2.5rem;
  }
`

export const ItemsColumn = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin: 0 1rem 0 1rem;
`

export const AdminPanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 6rem;

  ${breakpoints.media.bigTablet`
    ${ItemsColumn}:not(first-child) {
      margin-top: 5rem;
    }

    ${ItemsColumn} {
      width: 100%;
    }
  `}
`
