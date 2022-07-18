import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Header } from '../layouts'
import ProjectCard from '../components/project-card'

const Projects: NextPage = () => {

    const [loading, setLoading] = useState(true)
    const [githubRepos, setGithubRepos] = useState([])

    const getGithubRepos = async () => {
        const res = await fetch('/api/github-repos')
        const {repos} = await res.json()
        setGithubRepos(repos)
        setLoading(false)
    }

    useEffect(() => {
        getGithubRepos()
    }, [])

    const sampleRepo = {
        html_url: "", name: "Repo Name", stargazers_count: 0, forks: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus felis vitae lorem gravida pharetra. Cras eu luctus libero. Vivamus.",
        languages: { lang1: 100 }
    }

    const skeleton = Array(15).fill(sampleRepo).map((item, index) => {
        return (
            <ProjectCard repo={item} key={index} isSkeleton/>
        )
    })

    return (
        <>
            <Head>
                <title>Projects | Ben Brackenbury</title>
            </Head>

            <Header/>

            <main className="Projects">
                <h1>Projects</h1>
                <h2>Public GitHub Repos</h2>
                <div className="project-grid">
                    {loading ? skeleton: githubRepos.map((repo: any, index: number) => (
                        <ProjectCard repo={repo} key={index} />
                    ))}
                </div>
            </main>

        </>
    )
}

export default Projects
