import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'

type Props = { src: string; className?: string; flipped?: boolean }

export default function HlsBackground({ src, className = '', flipped = false }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}))
      return () => hls.destroy()
    }

    // @ts-ignore
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      video.addEventListener('loadedmetadata', () => video.play().catch(() => {}))
    }
  }, [src])

  return (
    <video
      ref={ref}
      playsInline
      muted
      loop
      autoPlay
      className={`${className} absolute left-1/2 top-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 ${flipped ? 'scale-y-[-1]' : ''}`}
    />
  )
}
