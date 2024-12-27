'use client'

import dynamic from 'next/dynamic'

export default function Header() {
  const ThemeSwitcher = dynamic(() => import('./theme-switcher'), {
    ssr: false,
  })

  return <ThemeSwitcher />
}
