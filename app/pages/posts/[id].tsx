import { GetServerSideProps } from 'next'
import { PostPage as Post } from '../../components/post'

import { expandedPosts } from '../../__mocks__'

export interface ServerSideProps {
  post?: any
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
