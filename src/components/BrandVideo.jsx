import { useEffect, useRef, useState } from "react"

function BrandVideo() {
  const videoRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "300px",
      },
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="brand-video-section">
      <div className="brand-video-container">
        <video
          ref={videoRef}
          className="brand-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          {shouldLoad && (
            <source
              src="/videos/k-perumal-silks-ad.mp4"
              type="video/mp4"
            />
          )}
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

export default BrandVideo;