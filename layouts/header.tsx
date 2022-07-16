import Link from '../components/link'

const Header: React.FC = () => {
  return (
    <header className="Header">
        <Link href="/">
          <h1>Ben Brackenbury</h1>
        </Link>

        <nav>
          <li>
            <Link className="link" href="/" canBeActive>Home</Link>
          </li>
          <li>
            <Link className="link active" href="/about" canBeActive>About</Link>
          </li>
          <li>
            <Link className="link" href="/projects" canBeActive>Projects</Link>
          </li>
          {/* <li>
            <Link className="link" href="/blog" canBeActive>Blog</Link>
          </li> */}
        </nav>
    </header>
  )
}

export default Header
