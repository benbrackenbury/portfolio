import { faAppStore, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <main className="grid place-items-center w-screen h-screen">
      <div className="flex flex-col justify-center align-middle text-center gap-4">
        <h1 className="text-6xl font-bold">Ben Brackenbury</h1>
        <p className="text-2xl">Web & iOS Developer</p>

        <div className="flex flex-row justify-center gap-7 text-4xl my-5 select-none mb-20">
          <a href="https://x.com/ben_brackenbury" target="_blank" className='opacity-50 hover:opacity-100 p-1'>
              <span className="font-bold">𝕏</span>
          </a>
          <a href="https://github.com/benbrackenbury" target="_blank" className='opacity-50 hover:opacity-100 p-1'>
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a href="https://linkedin.com/in/benbrackenbury" target="_blank" className='opacity-50 hover:opacity-100 p-1'>
            <FontAwesomeIcon icon={faLinkedinIn}/>
          </a>
          <a href="https://apps.apple.com/bt/developer/ben-brackenbury/id1518789219" target="_blank" className='opacity-50 hover:opacity-100 p-1'>
            <FontAwesomeIcon icon={faAppStore}/>
          </a>
        </div>

        <p><em>Website under development—more coming soon...</em></p>
 
      </div>
    </main>
  )
}
