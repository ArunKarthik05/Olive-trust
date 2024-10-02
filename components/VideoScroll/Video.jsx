import { useEffect, useRef } from 'react';
import Script from 'next/script';
import styles from './Video.module.scss';

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play(); // Play the video when it comes into view
          } else {
            video.pause(); // Pause the video when it goes out of view
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <>
      {/* Load external scripts */}
      <Script src="https://cdn-script.com/ajax/libs/jquery/3.7.1/jquery.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/ScrollTrigger.min.js" strategy="beforeInteractive" />

      {/* Video Element */}
      <video
        ref={videoRef}
        className={styles.video}
        src="/vids/bg.mp4"
        type="video/mp4"
        muted
        loop 
      />
    </>
  );
};

export default VideoBackground;
