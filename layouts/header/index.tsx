import React, { SyntheticEvent, useRef } from "react"
import Link from "../../components/link"
import styles from './Header.module.scss'

const Header = () => {

    const navMenu = useRef(null)

    const toggleMenu = (e: SyntheticEvent) => {
        e.preventDefault()
        navMenu.current.classList.toggle("show")
    }

    return (
        <header className={styles.Header}>
            <Link href="/">
                <h1>Ben Brackenbury</h1>
            </Link>

            <nav ref={navMenu} className="show">
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
            <button onClick={toggleMenu}>
                Menu
            </button>
        </header>
    )
}

export default Header