import styled from 'styled-components'

import { Button } from '../Button'
import { ReactionButton } from './../QuestionReactions/styled'

export const QuestionsBuilderContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin: 10px;
  }

  width: 37rem;

  ${ReactionButton} {
    transition: 0.3s all;
    margin: 5px;

    &:hover {
      transition: 0.3s all;
      background: #000000;
    }
  }
`

export const StyledButton = styled(Button)`
  margin-top: 30px;
  width: 25rem;
`

export const ReactionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
