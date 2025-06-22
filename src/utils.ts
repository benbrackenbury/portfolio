import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'

const rootDir = path.join(process.cwd(), 'src', 'app', 'blog')

export type Post = {
  slug: string
  title: string
  author: string
  date: string
}

export const getPostBySlug = async (slug: string) => {
  const formattedSlug = slug
  const filePath = path.join(rootDir, `${formattedSlug}/page.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  })
  return { meta: { ...frontmatter, slug: formattedSlug }, content }
}

export const getPostsMetaData = async () => {
  const files = fs.readdirSync(rootDir)
  let posts = []
  for (const fileName of files) {
    if (fileName === 'layout.tsx') continue
    const { meta } = await getPostBySlug(fileName)
    posts.push(meta)
  }
  return posts as Post[]
}
