import { FC } from 'react'
import { PostCard } from 'ui'

import { PostsListProps } from './posts-list.types'
import { PostsListWrapper } from './styled'

const PostsList: FC<PostsListProps> = ({ posts }) => (
  <PostsListWrapper>
    {posts.map((post) => (
      <PostCard {...post} key={post.text} />
    ))}
  </PostsListWrapper>
)

export default PostsList
