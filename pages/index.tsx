import type { NextPage } from 'next'
import Head from 'next/head'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faAppStore } from "@fortawesome/free-brands-svg-icons"
import Link from '../components/link'

const Home: NextPage = () => {

  return (
    <div className="Home">
        <Head>
          <title>Ben Brackenbury</title>
        </Head>

        <header>
          <div className="title-section">
            <Link href="/">
              <h1>Ben Brackenbury</h1>
            </Link>
            <h2>iOS & Web development</h2>
          </div>
        </header>

        <nav className="links">
          <div className="main">
            <Link className="link" href="/about">About</Link>
            <Link className="link" href="/projects">Projects</Link>
            {/* <Link className="link" href="/projects">Blog</Link> */}
          </div>
          <div className="socials">
            <Link className="social" href="http://twitter.com/ben_brackenbury" newTab label="Twitter">
              <FontAwesomeIcon icon={faTwitter}/>
            </Link>
            <Link className="social" href="http://github.com/benbrackenbury" newTab label="GitHub">
              <FontAwesomeIcon icon={faGithub}/>
            </Link>
            <Link className="social" href="https://apps.apple.com/bt/developer/ben-brackenbury/id1518789219" newTab label="App Store">
              <FontAwesomeIcon icon={faAppStore}/>
            </Link>
          </div>
        </nav>

      </div>
  )
}

export default Home
