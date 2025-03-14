import React from 'react'
import Protect from '@assets/Protect.png'
import styles from '../../style'

const Feature2 = () => {
    return (
        <section className={`grid grid-cols-1 md:grid-cols-2 items-center ${styles.paddingY}`}>
            <div className='mb-10 md:pr-20'>
                <img 
                    src={Protect} 
                    alt="Illustration of a sales incentive program"
                    className='rounded-md w-[100%] h-[100%]'
                />
            </div>

            <div>
                <h1 className='text-4xl font-bold tracking-wide'>
                    Protect Your Images with Watermark Security
                </h1>

                <p className='text-neutral-500 mt-7'>
                    Our Secure Image Licensing System ensures that your work is safeguarded with watermarks, preventing unauthorized use. This feature allows photographers to confidently showcase their portfolios while maintaining control over their images.
                </p>

                <div className='mt-7'>
                    <a href="#">Join Now →</a>
                </div>
            </div>

        </section>
    )
}

export default Feature2
