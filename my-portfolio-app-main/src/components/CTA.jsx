import React from 'react'
import GradientButton from './GradientButton'

const CTA = () => {
  return (
    <>
    <div>
        <div className="main-container py-20 lg:py-28 h-full flex flex-col gap-8 justify-center items-center">
            <h4 className='max-w-6xl text-2xl lg:text-5xl text-center leading-1.5'>fullstack devloper &  software developer</h4>
            <GradientButton text="Book a call" link='/' />

        </div>
    </div>

      
    </>
  )
}

export default CTA
