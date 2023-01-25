import React, { useState, useEffect, useRef, PropsWithChildren } from 'react'
import { RtcPropsInterface, mediaStore } from './PropsContext'
import {
  ILocalVideoTrack,
  ILocalAudioTrack,
  createCameraVideoTrack,
  createMicrophoneAudioTrack
} from 'agora-rtc-react'
import { TracksProvider } from './TracksContext'

const useAudioTrack = createMicrophoneAudioTrack({ encoderConfig: {} })

const useUserTrack = createCameraVideoTrack({
  encoderConfig: {},
  facingMode: 'user'
})
const useEnvironmentTrack = createCameraVideoTrack({
  encoderConfig: {},
  facingMode: 'environment'
})

/**
 * React component that create local camera and microphone tracks and assigns them to the child components
 */
const TracksConfigure: React.FC<
  PropsWithChildren<Partial<RtcPropsInterface>>
> = (props) => {
  const [ready, setReady] = useState<boolean>(false)
  const [localVideoTrack, setLocalVideoTrack] =
    useState<ILocalVideoTrack | null>(null)
  const [localAudioTrack, setLocalAudioTrack] =
    useState<ILocalAudioTrack | null>(null)

  const [videoTracks, setVideoTracks] = useState<{
    user: ILocalVideoTrack | null
    environment: ILocalVideoTrack | null
  }>({
    user: null,
    environment: null
  })
  const {
    ready: audioTrackReady,
    track: audioTrack,
    error: audioTrackError
  } = useAudioTrack()
  const {
    ready: environmentTrackReady,
    track: environmentTrack,
    error: environmentTrackError
  } = useEnvironmentTrack()
  const {
    ready: userTrackReady,
    track: userTrack,
    error: userTrackError
  } = useUserTrack()
  const mediaStore = useRef<mediaStore>({})
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null)

  const swapCamera = () => {
    console.log('LOGLOG! TracksConfigure:swapCamera', videoTracks)
    if (!videoTracks.environment || !videoTracks.user) return

    const newTrack =
      currentTrackId === videoTracks.user.getTrackId()
        ? videoTracks.environment
        : videoTracks.user
    console.log('LOGLOG! TracksConfigure:swapCamera:newTrack', newTrack)

    mediaStore.current[0].videoTrack = newTrack
    setLocalVideoTrack(newTrack)
  }

  useEffect(() => {
    console.log('LOGLOG! TracksConfigure:useEffect', {
      audioTrack,
      userTrack,
      environmentTrack
    })

    setVideoTracks({
      user: userTrack,
      environment: environmentTrack
    })

    if (audioTrack !== null && userTrack !== null) {
      setLocalAudioTrack(audioTrack)
      setLocalVideoTrack(userTrack)

      mediaStore.current[0] = {
        audioTrack: audioTrack,
        videoTrack: userTrack
      }

      setReady(true)
    } else if (audioTrackError) {
      console.error(audioTrackError)
      setReady(false)
    }

    return () => {
      console.log('LOGLOG! TracksConfigure:useEffect:cleanup')
      if (audioTrack) audioTrack.close()
      if (environmentTrack) environmentTrack.close()
      if (userTrack) userTrack.close()
    }
  }, [
    audioTrackReady,
    audioTrackError,
    environmentTrackReady,
    environmentTrackError,
    userTrackReady,
    userTrackError
  ]) //, ready])

  useEffect(() => {
    console.log(
      'LOGLOG! TracksConfigure:useEffect:localVideoTrack',
      localVideoTrack
    )
    if (localVideoTrack) setCurrentTrackId(localVideoTrack.getTrackId())
  }, [localVideoTrack])

  useEffect(() => {
    const interval = setInterval(() => {
      swapCamera()
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <TracksProvider
      value={{
        localVideoTrack: localVideoTrack,
        localAudioTrack: localAudioTrack,
        swapCamera
      }}
    >
      {ready ? props.children : null}
    </TracksProvider>
  )
}

export default TracksConfigure
