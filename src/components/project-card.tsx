import Link from 'next/link'

type ProjectCardProps = {
  title: string
  description: string
  href: string
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Link
      href={props.href}
      className='bg-background-secondary/30 hover:bg-background-secondary/60 flex flex-col gap-4 rounded-lg p-4 transition-colors'
    >
      <h3 className='text-2xl font-medium'>{props.title}</h3>
      <p className='text-md opacity-80'>{props.description}</p>
    </Link>
  )
}
