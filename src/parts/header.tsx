import HeaderTitleLink from '@/components/header-title-link'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-center '>
      <header className='fixed top-0 z-40 mx-4 mt-4 flex w-[clamp(200px,90vw,80rem)] flex-col items-center justify-between gap-2 rounded-full bg-neutral-600/20 px-8 py-2 backdrop-blur-xl transition-all duration-300 hover:bg-neutral-600/25 sm:mx-[10vw] sm:flex-row sm:gap-0 sm:py-3'>
        <HeaderTitleLink>
          <h1 className='text-2xl font-bold sm:text-4xl'>Ben Brackenbury</h1>
        </HeaderTitleLink>
        <nav className='flex items-center space-x-4'>
          <Link
            href='https://github.com/benbrackenbury'
            target='_blank'
            rel='noopener noreferrer'
            className='text-lg opacity-50 transition-all duration-300 hover:opacity-100 sm:text-2xl'
          >
            GitHub
          </Link>
        </nav>
      </header>
    </div>
  )
}
