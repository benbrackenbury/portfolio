import Arrow from '@/components/Arrow'
import GitHubProjects from '@/components/GitHubProjects'
import SocialLink from '@/components/SocialLink'
import {
  faAppStore,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tweet } from 'react-tweet'

export default function Home() {
  return (
    <>
      <section className="grid h-[90svh] w-[100dvw] place-items-center px-6">
        <div className="flex w-full flex-col justify-center gap-4 text-center align-middle">
          <h1 className="text-5xl font-bold sm:text-6xl">Ben Brackenbury</h1>
          <p className="text-2xl">Web & iOS Developer</p>

          <div className="my-5 mb-20 flex select-none flex-row justify-center gap-7 text-4xl">
            <SocialLink.X username="benbrackenbury" />
            <SocialLink.GitHub username="benbrackenbury" />
            <SocialLink.LinkedIn username="benbrackenbury" />
            <SocialLink.AppStore username="ben-brackenbury/id1518789219" />
          </div>
        </div>
      </section>

      <article className="mb-20 flex flex-col gap-6 p-4 sm:px-8">
        <h2 className="text-3xl font-semibold sm:text-4xl">Projects</h2>
        <GitHubProjects />
        <section className="pt-6">
          <h3 className="text-lg font-semibold sm:text-xl">iOS Projects</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Tweet id="1646116563924164609" />
            <Tweet id="1650412863272484866" />
          </div>
        </section>
      </article>
    </>
  )
}
