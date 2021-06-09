import { GetServerSideProps } from 'next'

import Posts from '../../components/pages/posts'
import { posts, postFilters } from '../../__mocks__'

const PostsPage = Posts

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      posts,
      postFilters,
    },
  }
}

export default PostsPage
