import Arrow from '@/components/Arrow'
import GitHubProjects from '@/components/GitHubProjects'
import SocialLink from '@/components/SocialLink'
import {
  faAppStore,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <>
      <section className="grid h-[90dvh] w-[100dvw] place-items-center px-6">
        <div className="flex w-full flex-col justify-center gap-4 text-center align-middle">
          <h1 className="text-5xl font-bold sm:text-6xl">Ben Brackenbury</h1>
          <p className="text-2xl">Web & iOS Developer</p>

          <div className="my-5 mb-20 flex select-none flex-row justify-center gap-7 text-4xl">
            <SocialLink
              href="https://x.com/ben_brackenbury"
              label="X (Twitter)"
            >
              𝕏
            </SocialLink>
            <SocialLink href="https://github.com/benbrackenbury" label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/benbrackenbury"
              label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </SocialLink>
            <SocialLink
              href="https://apps.apple.com/bt/developer/ben-brackenbury/id1518789219"
              label="App Store"
            >
              <FontAwesomeIcon icon={faAppStore} />
            </SocialLink>
          </div>
        </div>
      </section>

      <article className="mb-20 flex flex-col gap-6 p-4 sm:px-8">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <GitHubProjects />
      </article>
    </>
  )
}
