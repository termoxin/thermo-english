import { Post } from '../post/post.types'

export interface AdminPanelProps {
  posts: {
    draft: Post[]
    requested: Post[]
    published: Post[]
  }
}
