import React from 'react'

const Hero = ({ title, description, children }) => {
    return (
        <section className='text-white w-full py-7'>
            <div className='max-w-screen-xl mx-auto'>
                <div>
                    <h1 className='text-5xl font-bold'>{title}</h1>
                    <p className='mt-2 text-base'>{description}</p>
                </div>
                {children}
            </div>
        </section>
    )
}

export default Hero
