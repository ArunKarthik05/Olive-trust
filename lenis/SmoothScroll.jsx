"use client";
import ReactLenis from "@studio-freight/react-lenis";

function LenisScroll({ children }) {
  return (
    <ReactLenis root options={{ lerp: 1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default LenisScroll;
