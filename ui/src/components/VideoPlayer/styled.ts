import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
  position: relative;
  width: 375px;
  height: 211px;

  video {
    width: 100%;
    height: 100%;
  }
`

export const Controls = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    z-index: 2;
    cursor: pointer;
  }
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);
`

export const Preview = styled.img`
  position: absolute;
  width: 375px;
  height: 211px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
