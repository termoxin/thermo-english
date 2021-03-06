import React, { FC, useState } from 'react'
import { useVideo } from 'react-use'

import { VideoPlayerProps } from './video-player.types'

import PauseIcon from '../../icons/Pause'
import PlayIcon from '../../icons/Play'
import {
  VideoPlayerContainer,
  Controls,
  Overlay,
  Preview,
  Video,
} from './styled'

export const VideoPlayer: FC<VideoPlayerProps> = ({
  src,
  className,
  previewUrl,
  autoPlay = false,
}) => {
  const [video, state, controls] = useVideo(
    <Video src={src} data-testid="video" autoPlay={autoPlay} />,
  )

  const [showControls, setShowControls] = useState(false)

  const showPreview = previewUrl && state.time === 0

  return (
    <VideoPlayerContainer
      data-testid="video-player-container"
      className={className}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {showPreview && !autoPlay && (
        <Preview src={previewUrl} data-testid="preview" />
      )}
      {video}
      {showControls && (
        <>
          <Controls data-testid="controls">
            {state.paused ? (
              <PlayIcon
                onClick={controls.play}
                data-testid="play-button"
                height="72"
                width="72"
              />
            ) : (
              <PauseIcon
                onClick={controls.pause}
                data-testid="pause-button"
                height="72"
                width="72"
              />
            )}
          </Controls>
          <Overlay data-testid="overlay" />
        </>
      )}
    </VideoPlayerContainer>
  )
}
