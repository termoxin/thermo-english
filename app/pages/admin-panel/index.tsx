import { GetServerSideProps } from 'next'

import { AdminPanel } from '../../components/pages-components/admin-panel'
import { Post } from '../../components/pages-components/post/post.types'
import { expandedPosts } from '../../__mocks__'

export default AdminPanel

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = expandedPosts.reduce(
    (accumulator: Record<string, Post[]>, value) => {
      const state = value.state

      if (state && !accumulator[state]) {
        accumulator[state] = [value]
        return accumulator
      }

      if (state) {
        accumulator[state] = [...accumulator[state], value]
        return accumulator
      }

      return accumulator
    },
    {},
  )

  return {
    props: {
      posts,
    },
  }
}
