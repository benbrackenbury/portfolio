import { getPostsMetaData } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const json = `
{
    "name": "Ben Brackenbury",
    "location": "United Kingdom",
    "role": "Developer",
    "platforms": [
        "Web", "iOS"
    ],
    "languages-and-frameworks": [
        "TypeScript/JavaScript",
        "Next.JS", "React", "Tailwind",
        "Go", "C/C++",
        "PHP", "Laravel", "Wordpress",
        "Swift", "SwiftUI", "UIKit"
    ],
    "links": [
        <a title='X (formerly Twitter)' href="https://x.com/ben_brackenbury" target="_blank" rel="noopener noreferrer">𝕏</a>,
        <a href="https://github.com/benbrackenbury" target="_blank" rel="noopener noreferrer">GitHub</a>
    ]
}
  `

  const posts = await getPostsMetaData()
  posts.sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className='space-y-8 py-8 xl:space-y-16'>
      <section className='overlap-col flex flex-row gap-6 xl:flex-row xl:gap-12'>
        <pre
          className='text-json w-full rounded-lg p-4 font-mono transition-opacity duration-1000 xl:w-1/2 starting:opacity-0'
          dangerouslySetInnerHTML={{ __html: json }}
        />
        <Image
          src='https://avatars.githubusercontent.com/u/13574556?v=4'
          alt='Ben Brackenbury'
          title='I use Neovim btw'
          width={400}
          height={400}
          className='starting:rotate-5 rotate-0 mx-auto aspect-square h-[30vw] max-h-[20rem] w-[30vw] max-w-[20rem] place-self-center rounded-full object-cover transition-all duration-1000 sm:h-[25vw] sm:w-[25vw] md:h-[20vw] md:w-[20vw] 2xl:h-[30vw] 2xl:w-[30vw] starting:scale-70 starting:opacity-60'
        />
      </section>

      <section>
        <h2 className='mb-6 text-3xl font-semibold sm:text-4xl'>Blog</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2'>
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              className='w-full rounded-xl bg-neutral-600/20 p-4 transition-colors duration-300 hover:bg-neutral-600/25'
              key={post.slug}
            >
              <h3 className='text-xl font-semibold sm:text-2xl'>
                {post.title}
              </h3>
              <p className='text-base opacity-70 sm:text-lg'>{post.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
