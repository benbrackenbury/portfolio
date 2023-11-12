import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

type GitHubProject = {
  name: string
  description: string
  language: string
  html_url: string
  stargazers_count: number
}

async function getProjects() {
  const res = await fetch('https://api.github.com/users/benbrackenbury/repos')
  const data = (await res.json()) as GitHubProject[]
  data.sort((a, b) => b.stargazers_count - a.stargazers_count)
  return data
}

export default async function GitHubProjects() {
  const projects = await getProjects()
  return (
    <ul className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {projects.slice(0, 8).map((project: GitHubProject, index: number) => (
        <ProjectCard project={project} key={index} />
      ))}

      <li>
        <Link
          href="https://github.com/benbrackenbury"
          target="_blank"
          className="grid place-content-center rounded-md bg-secondaryBackground p-4 text-center align-middle brightness-[99%] hover:brightness-90 dark:bg-secondaryBackgroundDark dark:brightness-125 dark:hover:brightness-150 sm:h-48"
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold sm:text-2xl">More</h3>
            <p className="max-w-prose opacity-70">See more projects</p>
          </div>
        </Link>
      </li>
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
        className="flex h-min flex-col justify-between gap-2 rounded-md bg-secondaryBackground p-4 hover:brightness-[99%] dark:bg-secondaryBackgroundDark dark:hover:brightness-110 sm:h-48"
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold sm:text-2xl">{project.name}</h3>
          <p className="max-w-prose opacity-70">{project.description}</p>
        </div>
        <div className="flex items-center gap-6">
          <p className="max-w-prose font-light opacity-70">
            <FontAwesomeIcon icon={faStar} className="mr-2 opacity-50" />
            {project.stargazers_count}
          </p>
          <p className="max-w-prose text-sm font-light opacity-50">
            {project.language}
          </p>
        </div>
      </Link>
    </li>
  )
}
