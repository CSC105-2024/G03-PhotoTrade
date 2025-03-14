import { navLinks } from "@constants"
import { useState } from "react"
import styles from "../../style"

const Navbar = () => {
    const [active, setActive] = useState('Home')

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar fixed top-0'>
            <a href="#" className="text-xl text-white font-bold">PhotoTrade</a>

            <ul className='space-x-6 sm:flex hidden'>
                {navLinks.map((item) => (
                    <li
                        key={item.id}
                        className={`cursor-pointe ${styles.underEffect} ${
                            active === item.title ? 'text-white' : 'text-gray-300'}`
                        }
                        onClick={() => setActive(item.title)}
                    >
                        <a href='#'>{item.title}</a>
                    </li>
                ))}
            </ul>
            <button className='text-sm bg-[#A259FF] hover:bg-[#8A3DFF] w-[70px] h-[35px] text-white rounded-lg cursor-pointer'>
                LogIn
            </button>
        </nav>
    )
}

export default Navbar
