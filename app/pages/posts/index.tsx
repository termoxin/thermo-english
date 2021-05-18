import { GetServerSideProps } from 'next'

import Posts from '../../components/posts'
import { posts } from '../../__mocks__'

const PostsPage = Posts

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      posts,
    },
  }
}

export default PostsPage
