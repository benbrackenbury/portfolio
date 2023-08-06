import { IconDefinition, faAppStore, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <main className="grid place-items-center w-[100dvw] h-[100dvh] px-6">
      <div className="flex flex-col justify-center align-middle text-center gap-4 w-full">
        <h1 className="text-5xl sm:text-6xl font-bold">Ben Brackenbury</h1>
        <p className="text-2xl">Web & iOS Developer</p>

        <div className="flex flex-row justify-center gap-7 text-4xl my-5 select-none mb-20">
          <SocialLink href='https://x.com/ben_brackenbury' label='𝕏' />
          <SocialLink href='https://github.com/benbrackenbury' label='GitHub' icon={faGithub} / >
          <SocialLink href='https://linkedin.com/in/benbrackenbury' label='LinkedIn' icon={faLinkedinIn} / >
          <SocialLink href='https://apps.apple.com/bt/developer/ben-brackenbury/id1518789219' label='App Store' icon={faAppStore} / >
        </div>

        <p><em>Website under development—more coming soon...</em></p>
 
      </div>
    </main>
  )
}


type SocialLinkProps = {
  href: string
  label: string
  icon?: IconDefinition
}
const SocialLink = ({ href, icon=undefined, label }: SocialLinkProps) => (
  <a 
    href={href}
    target="_blank"
    aria-label={label}
    className='opacity-50 hover:opacity-100 p-1 hover:text-accent focus:text-accent focus:  opacity-100'
  >
    { icon ? <FontAwesomeIcon icon={icon}/> : <span className="font-bold">{label}</span> }
  </a>
)