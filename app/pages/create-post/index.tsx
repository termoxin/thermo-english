import { GetServerSideProps } from 'next'

import { CreatePostPage } from '../../components/create-post-layout'
import { PostPageProps } from '../../components/post/post.types'

import { postPagePropsMock } from '../../__mocks__'

export default CreatePostPage

export const getServerSideProps: GetServerSideProps<PostPageProps> =
  async () => ({
    props: { post: postPagePropsMock },
  })
