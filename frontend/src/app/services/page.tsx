import ImageComponent from '@/components/common/Image'
import React from 'react'
import { images } from '../../../public/assets'
import SoundSystemHero from '@/components/ServicesPage/SoundSystemHero'
import SoundSolutions from '@/components/ServicesPage/SoundSolutions'
import StackedHighlights from '@/components/ServicesPage/StackedHighlights'


export default function services() {
  return (
//     <ImageComponent
//     title="Professional Audio Equipment"
//     imageSrc={images.png.img19}
//   />
<div>
    <SoundSystemHero/>
    <SoundSolutions/>
    <StackedHighlights />
</div>
  )
}
