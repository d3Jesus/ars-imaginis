import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ImageCard = () => {
    return (
        <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-100 hover:bg-white hover:shadow-md rounded-3xl shadow-sm">

            <div className='relative w-full h-40 my-3 object-contain mb-8'>
                <Image src="/" alt='image' fill priority className='object-contain' />
            </div>

            <div className='relative flex w-full mt-4'>
                <div className="flex absolute bottom-0 w-full z-10 justify-center">
                    <Button variant="default">Download</Button>
                </div>
            </div>
        </div>

    )
}

export default ImageCard