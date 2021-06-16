import { FC } from 'react'
import { PostItem, labelStates } from 'ui'

import { Post } from '../post/post.types'
import { AdminPanelProps } from './admin-panel.types'
import {
  DraftHeading,
  PublishedHeading,
  RequestedHeading,
  AdminPanelContainer,
  PostItemWrapper,
  PostsColumn,
  ItemsColumn,
} from './styled'

const buildPostItemPropsFromPost = (post: Post) => ({
  state: post.state as labelStates,
  text: post.wordText,
  previewUrl: post.previewUrl,
  likes: post.likes,
})

export const AdminPanel: FC<AdminPanelProps> = ({ posts }) => (
  <AdminPanelContainer>
    <ItemsColumn>
      <RequestedHeading>Requested</RequestedHeading>
      <PostsColumn>
        {posts.requested.map((post) => (
          <PostItemWrapper>
            <PostItem {...buildPostItemPropsFromPost(post)} />
          </PostItemWrapper>
        ))}
      </PostsColumn>
    </ItemsColumn>
    <ItemsColumn>
      <DraftHeading>Draft</DraftHeading>
      <PostsColumn>
        {posts.draft.map((post) => (
          <PostItemWrapper>
            <PostItem {...buildPostItemPropsFromPost(post)} />
          </PostItemWrapper>
        ))}
      </PostsColumn>
    </ItemsColumn>
    <ItemsColumn>
      <PublishedHeading>Published</PublishedHeading>
      <PostsColumn>
        {posts.published.map((post) => (
          <PostItemWrapper>
            <PostItem {...buildPostItemPropsFromPost(post)} />
          </PostItemWrapper>
        ))}
      </PostsColumn>
    </ItemsColumn>
  </AdminPanelContainer>
)
