import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from '../components/link'
import {getCurrentPageSelector} from '../util'
import ThemeToggle from './theme-toggle'

const Nav: React.FC = () => {

  const navRef = useRef<HTMLElement>(null)
  const router = useRouter()
  const [showMobileNav, setShowMobileNav] = useState(false)

  const closeNavigation = () => {
    if (navRef.current) {
      navRef.current.classList.remove('show')
    }
    document.querySelector(getCurrentPageSelector(router))?.classList.remove('dimmed')
    window.removeEventListener('scroll', closeOnScroll)
  }

  const openNavigation = () => {
    if (navRef.current) {
      navRef.current.classList.add('show')
    }
    document.querySelector(getCurrentPageSelector(router))?.classList.add('dimmed')
    window.addEventListener('scroll', closeOnScroll)
  }

  const closeOnScroll = () => {
    if (window.scrollY > 200) {
      closeNavigation()
    }
  }

  useEffect(() => {
    if (showMobileNav) {
      openNavigation()
    } else {
      closeNavigation()
    }
  }, [showMobileNav])

  const toggleMobileNav = () => {
    setShowMobileNav(showMobileNav ? false : true)
  }

  return (
    <div className="nav-wrapper">
        <nav ref={navRef}>
            <li>
                <Link className="link" href="/" canBeActive>Home</Link>
            </li>
            <li>
                <Link className="link" href="/about" canBeActive>About</Link>
            </li>
            <li>
            <   Link className="link" href="/projects" canBeActive>Projects</Link>
            </li>
            <li>
                <Link className="link" href="/blog" canBeActive>Blog</Link>
            </li>
        </nav>

        <ThemeToggle/>

        <button className="mobile-nav-btn" onClick={toggleMobileNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
    </div>
  )
}

export default Nav
