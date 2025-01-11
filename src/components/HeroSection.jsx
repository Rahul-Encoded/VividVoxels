import React from 'react';
import video1 from "../assets/video1_.mp4"
import video2 from "../assets/video4_.mp4"

function HeroSection() {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-7xl text-center tracking-wide'>
            VividVoxels build presets 
            <span className='bg-gradient-to-r from-purple-500 to-purple-900 text-transparent bg-clip-text'>
                {" "}for Artists
            </span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
          Empower your creativity and bring your artistic ideas to life with our intuitive presets that range from pixels to voxels. Get started today and turn your imagination immersive reality!
        </p>
        <div className='flex mt-10 justify-center'>
          <video autoPlay loop muted className='rounded-lg w-1/2 border border-purple-700 shadow-purple-500 mx-2 my-3'>
            <source src={video1} type='video/mp4'></source>
            Your video doesn't support the video tag.
          </video>
          <video autoPlay loop muted className='rounded-lg w-1/2 border border-purple-700 shadow-purple-500 mx-2 my-3'>
            <source src={video2} type='video/mp4'></source>
            Your video doesn't support the video tag.
          </video>
        </div>
    </div>
  )
}

export default HeroSection;