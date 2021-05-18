import { FC } from 'react'
import { PostCard, PostCardProps } from 'ui'

import { PostsListWrapper } from './styled'

interface PostsListProps {
  posts: PostCardProps[]
}

const PostsList: FC<PostsListProps> = ({ posts }) => (
  <PostsListWrapper>
    {posts.map((post) => (
      <PostCard {...post} key={post.text} />
    ))}
  </PostsListWrapper>
)

export default PostsList
