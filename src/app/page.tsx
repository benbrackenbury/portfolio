import ProjectCard from '@/components/project-card'
import SocialLink from '@/components/social-link'
import { AppStoreIcon, GitHubIcon, LinkedInIcon } from '@/lib/icons'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <ProjectsSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className='flex min-h-[80svh] items-center justify-center'>
      <div className='flex flex-col gap-10 text-center'>
        <h1 className='text-center font-serif text-7xl font-semibold'>
          Web &amp; iOS Developer
        </h1>
        <div className='flex items-center justify-center gap-12 text-5xl'>
          <SocialLink
            href='https://x.com/ben_brackenbury'
            ariaLabel='X'
            title='X'
          >
            𝕏
          </SocialLink>
          <SocialLink
            href='https://github.com/benbrackenbury'
            ariaLabel='GitHub'
            title='GitHub'
          >
            <GitHubIcon />
          </SocialLink>
          <SocialLink
            href='https://linkedin.com/in/benbrackenbury'
            ariaLabel='LinkedIn'
            title='LinkedIn'
          >
            <LinkedInIcon />
          </SocialLink>
          <SocialLink
            href='https://apps.apple.com/bt/developer/ben-brackenbury/id1518789219'
            ariaLabel='App Store'
            title='App Store'
          >
            <AppStoreIcon />
          </SocialLink>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className='flex flex-col gap-12'>
      <h2 className='font-serif text-4xl font-semibold'>Projects</h2>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 5 }).map((_, index) => (
          <ProjectCard
            key={index}
            title={`Project ${index + 1}`}
            description='Project description.'
            href={`/projects/${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
