'use client'

import { FormEvent, useState } from 'react'

export default function AdminPage() {
  const [status, setStatus] = useState('')

  async function publish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('Publishing...')
    const form = new FormData(event.currentTarget)
    const response = await fetch('/api/admin/posts', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(form)),
    })
    const result = await response.json()
    setStatus(result.message ?? 'Something went wrong.')
    if (response.ok) event.currentTarget.reset()
  }

  return (
    <section className='mx-auto max-w-3xl pt-16'>
      <h1 className='text-4xl font-semibold tracking-tight'>New post</h1>
      <p className='mt-2 text-foreground/60'>Posts are published as MDX and committed to the site.</p>
      <form onSubmit={publish} className='mt-10 space-y-6'>
        <label className='block'>
          <span className='mb-2 block font-medium'>Title</span>
          <input name='title' required className='w-full rounded border border-foreground/20 bg-transparent px-3 py-2' />
        </label>
        <label className='block'>
          <span className='mb-2 block font-medium'>Slug</span>
          <input name='slug' placeholder='my-new-post' required pattern='[a-z0-9]+(?:-[a-z0-9]+)*' className='w-full rounded border border-foreground/20 bg-transparent px-3 py-2' />
        </label>
        <label className='block'>
          <span className='mb-2 block font-medium'>Content</span>
          <textarea name='content' required rows={18} placeholder='Write in Markdown...' className='w-full rounded border border-foreground/20 bg-transparent px-3 py-2 font-mono text-sm' />
        </label>
        <button className='rounded bg-accent px-4 py-2 font-medium text-background'>Publish post</button>
        {status && <p role='status'>{status}</p>}
      </form>
    </section>
  )
}
