import { getPostsMetaData } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const posts = await getPostsMetaData()
  posts.sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div>
      <section className='grid gap-10 pt-16 pb-20 sm:pt-24 md:grid-cols-[1fr_auto] md:items-end'>
        <div>
          <p className='mb-6 font-mono text-xs tracking-widest text-accent uppercase'>
            Developer
          </p>
          <h2 className='text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.9] font-semibold tracking-tighter'>
            Ben
            <br />
            Brackenbury<span className='text-accent'>.</span>
          </h2>
          <p className='mt-8 max-w-xl text-xl leading-relaxed opacity-70 sm:text-2xl'>
            I build things for the web and iOS, from Next.js sites to native
            Swift apps.
          </p>
        </div>
        <Image
          src='https://avatars.githubusercontent.com/u/13574556?v=4'
          alt='Ben Brackenbury'
          title='Hello'
          width={400}
          height={400}
          className='size-32 rotate-0 rounded-full object-cover grayscale transition-all duration-1000 ease-out hover:grayscale-0 hover:duration-500 sm:size-44 starting:rotate-6 starting:opacity-0'
        />
      </section>

      <section className='grid gap-10 border-t border-foreground/15 py-10 sm:grid-cols-3'>
        <div>
          <h3 className='mb-3 font-mono text-xs tracking-widest uppercase opacity-50'>
            Platforms
          </h3>
          <p className='text-lg'>Web, iOS</p>
        </div>
        <div>
          <h3 className='mb-3 font-mono text-xs tracking-widest uppercase opacity-50'>
            Stack
          </h3>
          <p className='text-lg'>
            TypeScript, React, Next.js, Tailwind, Go, C/C++, PHP, Laravel,
            WordPress, Swift, SwiftUI, UIKit
          </p>
        </div>
        <div>
          <h3 className='mb-3 font-mono text-xs tracking-widest uppercase opacity-50'>
            Elsewhere
          </h3>
          <ul className='space-y-1 text-lg'>
            <li>
              <a title='X (formerly Twitter)' aria-label='X' href='https://x.com/ben_brackenbury' target='_blank' rel='noopener noreferrer' className='underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'>
                𝕏
              </a>
            </li>
            <li>
              <a href='https://github.com/benbrackenbury' target='_blank' rel='noopener noreferrer' className='underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'>
                GitHub
              </a>
            </li>
            <li>
              <a href='https://apps.apple.com/us/developer/ben-brackenbury/id1518789219' target='_blank' rel='noopener noreferrer' className='underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'>
                App Store
              </a>
            </li>
            <li>
              <a href='https://cursor.com/@benbrackenbury1' target='_blank' rel='noopener noreferrer' className='underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'>
                Cursor
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className='border-t border-foreground/15 pt-10'>
        <h2 className='mb-6 font-mono text-xs tracking-widest uppercase opacity-50'>
          Writing
        </h2>
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className='border-b border-foreground/15'>
              <Link
                href={`/blog/${post.slug}`}
                className='group flex items-baseline gap-6 py-6'
              >
                <span className='w-28 shrink-0 font-mono text-sm opacity-50'>
                  {post.date}
                </span>
                <span className='flex-1 text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent sm:text-4xl'>
                  {post.title}
                </span>
                <span className='text-2xl text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100'>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
