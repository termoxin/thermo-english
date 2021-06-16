import { PostPageProps } from '../../pages-components/post/post.types'
import { useEditPost } from './edit-post-layout.hook'

export const buildEditPostLayoutProps = ({
  state,
  actions,
}: ReturnType<typeof useEditPost>): PostPageProps => ({
  post: { ...state },
  onChangeQuestion: actions.setQuestion,
  onChangeReactions: actions.setReactions,
  onDeleteReaction: actions.deleteReaction,
  onChangeFirstTranscript: actions.setFirstTranscript,
  onChangeSecondTranscript: actions.setSecondTranscript,
  onUploadVideo: actions.setVideoUrl,
  onChangeWord: actions.setWordText,
})
