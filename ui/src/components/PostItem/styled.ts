import styled from 'styled-components'

export const PostItemContainer = styled.div`
  display: flex;
  padding: 0.8rem 1.5rem 0.8rem 0.8rem;
  height: 7rem;
  width: 34rem;
  font-size: 1.6rem;
  border-radius: 0.8rem;

  background: ${({ theme }) => theme.postItem.background};
  color: ${({ theme }) => theme.postItem.color};

  svg {
    cursor: pointer;
  }
`

export const LikesBlock = styled.div`
  background: ${({ theme }) => theme.postItem.likesBlock.background};
  color: ${({ theme }) => theme.postItem.likesBlock.color};
  border-radius: 0.8rem;
  padding: 0.3rem 0.8rem;
  font-size: 1.4rem;
  width: max-content;
`

export const LikesAndTextBlock = styled.div`
  margin-left: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const IconsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 4.1rem;
`

export const ContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Preview = styled.img`
  width: 5.8rem;
  height: auto;

  border-radius: 0.8rem;
`
