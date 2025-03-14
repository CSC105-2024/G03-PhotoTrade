import React from 'react'
import styles from '../style'

const MainLayout = ({ title, description, children }) => {
    return (
        <section>
            <div className='text-white'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className='mt-2 text-base'>{description}</p>
            </div>
            <div className={`${styles.flexCenter}`}>
                {children}
            </div>
        </section>
    )
}
export default MainLayout
