import React from 'react'
import Sell from '@assets/Sell.png'
import Protect from '@assets/Protect.png'

const ContentSection = ({ reverse = false }) => {
    return (
        <section className={`flex flex-cols gap-15 place-items-center mx-auto max-w-screen-xl my-30  ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className='w-1/2'>

                <h1 className='text-white text-5xl font-bold'>
                    {(reverse) 
                        ? 'Boost Your Sales with Our Seller Incentive Program' 
                        : 'Protect Your Images with Watermark Security'
                    }
                </h1>

                <p className='text-[#B0B0B0] mt-7'>
                    {(reverse)
                        ? 'Our Seller Incentive Program rewards creators for their popularity. When your image receives over 100 likes, its price automatically increases by 20 baht. This feature helps you maximize your earnings while showcasing your most-loved work.'
                        : 'Our Secure Image Licensing System ensures that your work is safeguarded with watermarks, preventing unauthorized use. This feature allows photographers to confidently showcase their portfolios while maintaining control over their images.'
                    }
                </p>

                <div className='text-white mt-7'>
                    {(reverse)? '': <a href="#">Join Now →</a>}
                </div>
            </div>

            <div className='w-1/2'>
                <img 
                    src={(reverse)? Sell : Protect} 
                    alt="Illustration of a sales incentive program"
                    className='w-full rounded-md'
                />
            </div>
        </section>
    )
}

export const ContentSubTop = () => <ContentSection reverse={true} />
export const ContentSubBelow = () => <ContentSection reverse={false} />
