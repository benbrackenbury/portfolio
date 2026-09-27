import HeaderTitleLink from '@/components/header-title-link'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='mx-auto flex max-w-6xl items-center justify-between border-b border-foreground/15 px-6 py-5 text-sm tracking-wide uppercase'>
      <HeaderTitleLink>
        <h1 className='font-medium'>
          Ben Brackenbury<span className='text-accent'>.</span>
        </h1>
      </HeaderTitleLink>
      <nav className='flex items-center gap-6'>
        <Link
          href='https://github.com/benbrackenbury'
          target='_blank'
          rel='noopener noreferrer'
          className='opacity-60 transition-colors duration-300 hover:text-accent hover:opacity-100'
        >
          GitHub
        </Link>
        <Link
          href='https://apps.apple.com/us/developer/ben-brackenbury/id1518789219'
          target='_blank'
          rel='noopener noreferrer'
          className='opacity-60 transition-colors duration-300 hover:text-accent hover:opacity-100'
        >
          App Store
        </Link>
      </nav>
    </header>
  )
}
