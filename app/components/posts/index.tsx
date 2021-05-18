import { FC } from 'react'
import { PostCardProps } from 'ui'

import PostsList from './posts-list'

interface PostsProps {
  posts: PostCardProps[]
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return <PostsList posts={posts} />
}

export default Posts
