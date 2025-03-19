import { navLinks } from "@/constants"
import { useState } from "react"
import styles from "@/style"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const [active, setActive] = useState('Home')

    return (
        <nav>
            <div className="container relative md:text-sm mx-auto">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-xl font-bold">PhotoTrade</a>

                    <ul className='space-x-6 sm:flex hidden'>
                        {navLinks.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointe ${styles.underEffect} ${active === item.title ? 'text-white' : 'text-gray-300'}`
                                }
                                onClick={() => setActive(item.title)}
                            >
                                <NavLink to={`/${item.id}`}>
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <Link
                        to="/login/login"
                        className='hidden md:flex justify-center space-x-12 items-center'
                    >
                        <div className={`${styles.bgCustom} py-2 px-3 rounded-md`}>

                            Sign In
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
