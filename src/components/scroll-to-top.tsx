'use client'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { useCallback, useEffect, useState } from 'react'

type ScrollToTopProps = {
  children: React.ReactNode
  minYScroll?: number
  className?: string
}

export default function ScrollToTop(props: ScrollToTopProps) {
  const { className = '' } = props
  const [visible, setVisible] = useState(props.minYScroll ? false : true)

  const handleScroll = useCallback(() => {
    if (!props.minYScroll) return
    console.log(window.scrollY, props.minYScroll)
    if (window.scrollY > props.minYScroll) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [])

  useEffect(() => {
    if (!props.minYScroll) return
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const baseStyles = cva('transition-opacity duration-300', {
    variants: {
      visibility: {
        visible: 'opacity-100',
        invisible: 'pointer-events-none opacity-0',
      },
    },
    defaultVariants: {
      visibility: 'invisible',
    },
  })

  const styles = cn(
    baseStyles({ visibility: visible ? 'visible' : 'invisible' }),
    className,
  )

  return (
    <button
      type='button'
      className={styles}
      onClick={() => {
        scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      {props.children}
    </button>
  )
}
