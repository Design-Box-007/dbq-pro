import React from 'react'
import ServicesGrid from './ServicesGrid'
import ProgressBar from '../common/ProgressBar'

export default function GridProgress() {
  return (
   <div className='flex flex-col  '>
         <ServicesGrid
  heading="Services We Provide"
  headingSize="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
  titleSize="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
/>
<ProgressBar/>

   </div>
  )
}
