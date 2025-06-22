'use client'

import Link from 'next/link'

export default function GitHubBanner() {
  return (
    <div
      className='fixed right-0 bottom-0 z-40 grid size-28 place-items-center starting: starting:-mr-[100%] starting:-mb-[100%] -mb-0 -mr-0 duration-1500 transition-all ease-bounce'
    >
      <Link
        href='https://github.com/benbrackenbury/portfolio'
        target='_blank'
        rel='noopener noreferrer'
        className='-rotate-45 text-center opacity-40 transition-all duration-300 hover:opacity-100'
      >
        View this site on GitHub
      </Link>
    </div>
  )
}
