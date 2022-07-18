import { useRouter } from "next/router"
import ThemeToggle from "../components/theme-toggle"

const Footer = () => {

    const router = useRouter()

    return (
        <footer>
            <div className="spacer"></div>
            <div className="copyright">
                &copy; Ben Brackenbury {new Date().getFullYear()}
            </div>
            {
                router.pathname === '/' ? (
                    <ThemeToggle>Toggle Theme</ThemeToggle>
                ) : (
                    <div className="spacer"></div>
                )
            }
        </footer>
    )
}

export default Footer