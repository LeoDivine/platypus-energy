import Image from 'next/image';
import React from 'react'

interface PROJECTINFO{
    image: string;
}

export default function ProjectInfo({image}:PROJECTINFO) {
  return (
    <div>
        <Image className='rounded-[20px] w-full p-[20px]' src={image} alt='project image' height="200" width="200" />
    </div>
  )
}
