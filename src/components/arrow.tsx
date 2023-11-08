'use client'

import React, { useEffect } from 'react'

export default function Arrow() {
  const arrowRef = React.useRef<SVGSVGElement>(null)

  useEffect(() => {
    const arrow = arrowRef.current
    if (!arrow) return

    window.addEventListener('scroll', () => {
      if (window.scrollY / window.innerHeight > 0.2) {
        arrow.classList.add('opacity-0')
      } else {
        arrow.classList.remove('opacity-0')
      }
    })

    return () => arrow.removeEventListener('scroll', () => {})
  }, [])

  return (
    <svg
      ref={arrowRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto h-12 scale-y-110 animate-bounce opacity-50 transition-opacity duration-1000"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="19 12 12 19 5 12"></polyline>
    </svg>
  )
}
