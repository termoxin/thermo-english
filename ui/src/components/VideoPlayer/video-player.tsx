import React, { FC, useState } from 'react'
import { useVideo } from 'react-use'

import { VideoPlayerProps } from './video-player.types'

import { ReactComponent as PauseIcon } from '../../icons/pause-icon.svg'
import { ReactComponent as PlayIcon } from '../../icons/play-icon.svg'
import { VideoPlayerContainer, Controls, Overlay } from './styled'

export const VideoPlayer: FC<VideoPlayerProps> = ({ src, className }) => {
  const [video, state, controls] = useVideo(
    <video src={src} data-testid="video" />,
  )

  const [showControls, setShowControls] = useState(false)

  return (
    <VideoPlayerContainer
      data-testid="video-player-container"
      className={className}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {video}
      {showControls && (
        <>
          <Controls data-testid="controls">
            {state.paused ? (
              <PlayIcon onClick={controls.play} data-testid="play-button" />
            ) : (
              <PauseIcon onClick={controls.pause} data-testid="pause-button" />
            )}
          </Controls>
          <Overlay data-testid="overlay" />
        </>
      )}
    </VideoPlayerContainer>
  )
}
