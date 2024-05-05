'use client'

import { MoonIcon, SunIcon, ThemeIcon } from '@/lib/icons'
import { MotionProps, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { toast } from 'sonner'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  type Theme = {
    value: string
    name: string
    icon: JSX.Element
  }

  const themes: Theme[] = [
    { value: 'system', name: 'System', icon: <ThemeIcon /> },
    { value: 'light', name: 'Light', icon: <SunIcon /> },
    { value: 'dark', name: 'Dark', icon: <MoonIcon /> },
  ]

  const currentTheme = themes.find((t) => t.value === theme) ?? themes[0]

  function toggleTheme() {
    const currentThemeIndex = themes.indexOf(currentTheme)
    const nextTheme = themes[(currentThemeIndex + 1) % themes.length]
    toast(`Switched to ${nextTheme.name} theme`, {
      duration: 1500,
      style: {
        backgroundColor: 'var(--color-background-secondary)',
        color: 'var(--color-foreground)',
        borderColor: 'transparent',
      },
    })
    setTheme(nextTheme.value)
  }

  const motionProps: MotionProps = {
    initial: { scale: 1 },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.9 },
    transition: { type: 'spring', stiffness: 300 },
  }

  return (
    <motion.button
      {...motionProps}
      type='button'
      onClick={toggleTheme}
      aria-label='Toggle theme'
      title={currentTheme.name}
      className='bg-background-secondary/0 hover:bg-background-secondary/100 cursor-pointer rounded-full p-2 transition-colors'
    >
      <div>{currentTheme.icon}</div>
    </motion.button>
  )
}
