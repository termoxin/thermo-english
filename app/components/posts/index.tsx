import { FC } from 'react'
import { PostCardProps } from 'ui'

import { PostFilter } from './posts-filter'
import PostsFilter from './posts-filter/posts-filter'
import PostsList from './posts-list/posts-list'

interface PostsProps {
  posts: PostCardProps[]
  postFilters: PostFilter[]
}

const Posts: FC<PostsProps> = ({ posts, postFilters }) => {
  return (
    <div>
      <PostsFilter filters={postFilters} onChangeFilter={console.log} />
      <PostsList posts={posts} />
    </div>
  )
}

export default Posts
