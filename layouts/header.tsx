import Link from '../components/link'
import Nav from '../components/nav'

const Header: React.FC = () => {
  return (
    <header className="Header">
        <Link href="/">
          <h1>Ben Brackenbury</h1>
        </Link>

        <Nav/>

    </header>
  )
}

export default Header
