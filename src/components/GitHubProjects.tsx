import Link from 'next/link'
import React from 'react'

type GitHubProject = {
  name: string
  description: string
  language: string
  html_url: string
}

async function getProjects() {
  const res = await fetch('https://api.github.com/users/benbrackenbury/repos')
  const data = (await res.json()) as GitHubProject[]
  return data
}

export default async function GitHubProjects() {
  const projects = await getProjects()
  return (
    <ul className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project: GitHubProject, index: number) => (
        <ProjectCard project={project} key={index} />
      ))}
    </ul>
  )
}

type ProjectCardProps = {
  project: GitHubProject
}
function ProjectCard(props: ProjectCardProps) {
  const { project } = props
  return (
    <li>
      <Link
        href={project.html_url}
        target="_blank"
        className="flex h-48 flex-col justify-between gap-2 rounded-md bg-secondaryBackground p-4 hover:brightness-110 dark:bg-secondaryBackgroundDark"
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <p className="max-w-prose opacity-70">{project.description}</p>
        </div>
        <p className="max-w-prose text-sm font-light opacity-50">
          {project.language}
        </p>
      </Link>
    </li>
  )
}
