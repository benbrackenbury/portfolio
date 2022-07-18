import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

type ThemeToggleProps = {
    children?: any
}

const ThemeToggle = ({ children }: ThemeToggleProps) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false)

    useEffect(() => {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.remove("dark")

        // apply oveeride if it exists, else set to device theme
        if (localStorage.getItem('theme-override')) {
            let themeOverride = localStorage.getItem('theme-override')
            document.documentElement.classList.add(themeOverride!)
            setIsDarkTheme(themeOverride === 'dark')
        } else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add("dark")
                setIsDarkTheme(true)
            } else {
                document.documentElement.classList.add("light")
                setIsDarkTheme(false)
            }
        }

        // delete override and change accodingly if device theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            localStorage.removeItem('theme-override')
            if (e.matches) {
                document.documentElement.classList.remove("light")
                document.documentElement.classList.add("dark")
                setIsDarkTheme(true)
              } else {
                document.documentElement.classList.remove("dark")
                document.documentElement.classList.add("light")
                setIsDarkTheme(false)
              }
        })

    }, [])

    const toggleDarkMode = () => {
        if (document.documentElement.classList.contains("light")) {
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme-override', 'dark')
            setIsDarkTheme(true)
        } else if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
            localStorage.setItem('theme-override', 'light')
            setIsDarkTheme(false)
        }
    }

    return (
        <button className="theme-toggle" onClick={toggleDarkMode}>
            {children ?? (
                <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} aria-label="Toggle theme"/>
            )}
        </button>
    )
}

export default ThemeToggle