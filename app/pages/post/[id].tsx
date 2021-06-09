import { GetServerSideProps } from 'next'
import { PostPage as Post } from '../../components/pages/post'
import { Post as PostType } from '../../components/pages/post/post.types'

import { expandedPosts } from '../../__mocks__'

export interface ServerSideProps {
  post?: PostType
}

const PostPage = Post

export const getServerSideProps: GetServerSideProps<
  ServerSideProps,
  { id: string }
> = async ({ params }) => {
  const id = params && +params?.id

  if (id !== undefined) {
    const post = expandedPosts[id]

    return { props: { post } }
  }

  return { props: {} }
}

export default PostPage
