import { PropsWithChildren } from 'react'

export default function MdxLayout(props: PropsWithChildren) {
  return (
    <div className='blog-post prose-neutral dark:prose-invert prose prose-lg mx-auto pt-16 prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-6xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-accent'>
      {props.children}
    </div>
  )
}
