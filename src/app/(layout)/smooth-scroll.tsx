'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

type SmoothScrollProps = {
  children: React.ReactNode
}

export default function SmoothScroll(props: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 0.5 }}>
      {props.children}
    </ReactLenis>
  )
}
