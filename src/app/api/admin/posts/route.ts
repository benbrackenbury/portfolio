import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { title, slug, content } = await request.json()
  if (
    typeof title !== 'string' ||
    typeof slug !== 'string' ||
    typeof content !== 'string' ||
    !title.trim() ||
    title.includes('\n') ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
  ) {
    return NextResponse.json({ message: 'Enter a title, slug, and post.' }, { status: 400 })
  }

  const repository = process.env.GITHUB_REPOSITORY
  const token = process.env.GITHUB_TOKEN
  if (!repository || !token) {
    return NextResponse.json({ message: 'GitHub publishing is not configured.' }, { status: 500 })
  }

  const path = `src/app/blog/${slug}/page.mdx`
  const headers = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'X-GitHub-Api-Version': '2022-11-28',
  }
  const existing = await fetch(`https://api.github.com/repos/${repository}/contents/${path}`, { headers })
  if (existing.ok) {
    return NextResponse.json({ message: 'That slug already exists.' }, { status: 409 })
  }
  if (existing.status !== 404) {
    return NextResponse.json({ message: 'Could not check GitHub.' }, { status: 502 })
  }

  const date = new Date().toISOString().slice(0, 10)
  const file = `---
title: "${title.replaceAll('"', '\\"')}"
author: "Ben Brackenbury"
date: "${date}"
---

${content.trim()}
`
  const response = await fetch(`https://api.github.com/repos/${repository}/contents/${path}`, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: `Add post: ${title}`,
      content: Buffer.from(file).toString('base64'),
      branch: process.env.GITHUB_BRANCH ?? 'master',
    }),
  })

  if (!response.ok) {
    return NextResponse.json({ message: 'GitHub could not publish the post.' }, { status: 502 })
  }
  return NextResponse.json({ message: 'Published. The site will rebuild from GitHub.' })
}
