import { FC } from 'react'
import { PostCardProps } from 'ui'

import { PostFilter } from './posts-filter'
import PostsFilter from './posts-filter/posts-filter'
import PostsList from './posts-list/posts-list'
import { PostsWrapper, PostsFilterWrapper } from './styled'

interface PostsProps {
  posts: PostCardProps[]
  postFilters: PostFilter[]
}

const Posts: FC<PostsProps> = ({ posts, postFilters }) => (
  <PostsWrapper>
    <PostsFilterWrapper>
      <PostsFilter filters={postFilters} onChangeFilter={console.log} />
    </PostsFilterWrapper>
    <PostsList posts={posts} />
  </PostsWrapper>
)
export default Posts
