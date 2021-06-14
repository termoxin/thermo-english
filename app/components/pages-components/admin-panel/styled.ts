import styled from 'styled-components'
import { Heading, PostItem } from 'ui'

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

export const AdminPanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
`
