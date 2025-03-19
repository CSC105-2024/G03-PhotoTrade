import { navLinks } from "@/constants"
import { useState } from "react"
import styles from "@/style"
import { Link, useNavigate } from "react-router-dom"
import { motion } from 'framer-motion';

const Navbar = () => {
    const [active, setActive] = useState('Home')
    const navigate = useNavigate();

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
                        >
                            PhotoTrade
                        </Link>
                    </motion.div>
                    <ul className='space-x-6 sm:flex hidden'>
                        {navLinks.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointe ${styles.underEffect} ${active === item.title ? 'text-white' : 'text-gray-300'}`
                                }
                                onClick={() => setActive(item.title)}
                            >
                                <Link to={`/${item.id}`}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        className={`${styles.bgCustom} py-2 px-3 rounded-md hidden md:flex justify-center space-x-12 items-center cursor-pointer hover:opacity-90`}
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
