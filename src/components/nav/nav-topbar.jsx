import { navLinks } from "@/constants"
import { useState, useEffect } from "react"
import styles from "@/style"
import { Link, useNavigate, useLocation  } from "react-router-dom"
import { motion } from 'framer-motion'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [active, setActive] = useState(location.pathname)

    useEffect(() => {
        setActive(location.pathname)
    }, [location.pathname])
    
    return (
        <nav>
            <div className="container relative md:text-sm mx-auto">
                <div className="flex justify-between items-center">

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/"
                            className="text-xl font-bold"
                            onClick={() => {
                                setActive('/')
                            }}
                        >
                            PhotoTrade
                        </Link>
                    </motion.div>

                    <ul className='space-x-6 md:flex hidden'>
                        {navLinks.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointer ${styles.underEffect} ${active === `/${item.id}` ? 'text-white' : ' text-neutral-500'}`}
                            >
                                <Link 
                                    to={`/${item.id}`}
                                    aria-current={active === `/${item.id}` ? "pages" : undefined}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        className={`${styles.bgCustom} text-sm py-2 px-3 rounded-md hidden md:flex justify-center space-x-12 items-center cursor-pointer hover:opacity-90`}
                        onClick={() => navigate("/login")}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
