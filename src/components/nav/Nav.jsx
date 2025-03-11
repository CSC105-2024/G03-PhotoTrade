const Nav = () => {
    const menus = [
        'Home',
        'Marketplace',
        'Contact'
    ]

    return (
        <nav className='flex justify-between items-center text-white border-b-1 border-gray-500 py-3 px-5 fixed z-10 top-0 w-full bg-[#060606]'>
            <a href="#" className="text-xl font-bold">PhotoTrade</a>

            <ul className='flex space-x-5'>
                {menus.map((item, index) => (
                    <li
                        className='relative after:bg-[#A259FF] after:absolute after:h-1 
                            after:w-0 after:bottom-0 after:left-0 after:rounded-sm hover:after:w-full after:transition-all 
                            after:duration-300 cursor-pointe'
                        key={index}

                    >
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
            
            <button className='text-sm bg-[#A259FF] hover:bg-[#8A3DFF] w-[70px] h-[35px] text-white rounded-lg cursor-pointer'>LogIn</button>
        </nav>
    )
}

export default Nav
