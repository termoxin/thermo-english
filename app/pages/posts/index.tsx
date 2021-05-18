import { PostCard } from 'ui'

import { posts } from '../../__mocks__'

const Posts = () => {
  return (
    <>
      {posts.map((post) => (
        <PostCard {...post} key={post.text} />
      ))}
    </>
  )
}

export default Posts
