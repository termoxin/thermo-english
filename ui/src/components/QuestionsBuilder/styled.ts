import styled from 'styled-components'

import { Button } from '../Button'
import { ReactionButton } from './../QuestionReactions/styled'

export const QuestionsBuilderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;

  & > * {
    margin: 1rem;
  }

  input {
    width: auto;
  }

  ${ReactionButton} {
    transition: 0.3s all;
    margin: 0.5rem;

    &:hover {
      transition: 0.3s all;
      background: #000000;
    }
  }
`

export const StyledButton = styled(Button)`
  margin-top: 3rem;
  width: 25rem;
`

export const ReactionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
`
