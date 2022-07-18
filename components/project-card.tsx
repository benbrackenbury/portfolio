import Link from './link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons'

interface ProjectCardProps {
    repo: any,
    isSkeleton?: boolean
  }

const ProjectCard = ({ repo, isSkeleton=false }: ProjectCardProps) => {
    return (
        (
            <div className="project-card" is-skeleton={isSkeleton.toString()}>
                <div className="title-row">
                    <Link href={repo.html_url} newTab>
                        <h2>{repo.name}</h2>
                    </Link>
                    <div className="community-stats">
                        {repo.stargazers_count > 0 && (
                            <p className="stars-info">
                                {repo.stargazers_count}{'\u00A0'}
                                <FontAwesomeIcon icon={faStar} />
                            </p>
                        )}
                        {repo.forks > 0 && (
                            <p className="stars-info">
                                {repo.forks}{'\u00A0'}
                                <FontAwesomeIcon icon={faCodeFork} />
                            </p>
                        )}
                    </div>
                </div>
                <p className="description">{repo.description}</p>
                <div className="spacer"></div>
                <div className="languages">
                    {Object.keys(repo.languages).map((language: any, index: number) => (
                        <p className="lang-badge" key={index}>{language}</p>
                    ))}
                </div>
            </div>
        )
    )
}

export default ProjectCard