import Link from "../../components/link"
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.Header}>
            <Link href="/">
                <h1>Ben Brackenbury</h1>
            </Link>

            <nav>
                <li className="active">
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">About</Link>
                </li>
                <li>
                    <Link href="/">Projects</Link>
                </li>
            </nav>
        </header>
    )
}

export default Header