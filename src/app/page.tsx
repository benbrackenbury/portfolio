import Arrow from '@/components/arrow'
import {
  IconDefinition,
  faAppStore,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <main>
      <section className="grid h-[90dvh] w-[100dvw] place-items-center px-6">
        <div className="flex w-full flex-col justify-center gap-4 text-center align-middle">
          <h1 className="text-5xl font-bold sm:text-6xl">Ben Brackenbury</h1>
          <p className="text-2xl">Web & iOS Developer</p>

          <div className="my-5 mb-20 flex select-none flex-row justify-center gap-7 text-4xl">
            <SocialLink href="https://x.com/ben_brackenbury" label="𝕏" />
            <SocialLink
              href="https://github.com/benbrackenbury"
              label="GitHub"
              icon={faGithub}
            />
            <SocialLink
              href="https://linkedin.com/in/benbrackenbury"
              label="LinkedIn"
              icon={faLinkedinIn}
            />
            <SocialLink
              href="https://apps.apple.com/bt/developer/ben-brackenbury/id1518789219"
              label="App Store"
              icon={faAppStore}
            />
          </div>
        </div>
      </section>

      <section className="min-h-screen">
        <Arrow />
      </section>
    </main>
  )
}

type SocialLinkProps = {
  href: string
  label: string
  icon?: IconDefinition
}
const SocialLink = ({ href, icon = undefined, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    aria-label={label}
    className="p-1 opacity-50 hover:opacity-100 focus:opacity-100"
  >
    {icon ? (
      <FontAwesomeIcon icon={icon} />
    ) : (
      <span className="font-bold">{label}</span>
    )}
  </a>
)
