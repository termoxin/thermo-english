import { GetServerSideProps } from 'next'

import { Post } from '../../components/pages-components/post/post.types'
import { expandedPosts } from '../../__mocks__'
import { EditPostPage } from '../../components/pages-components/edit-post'

export default EditPostPage

export const getServerSideProps: GetServerSideProps<
  { post?: Post },
  { id: string }
> = async ({ params }) => {
  const id = params && +params?.id

  if (id !== undefined) {
    const post = expandedPosts[id]

    return { props: { post } }
  }

  return { props: {} }
}
