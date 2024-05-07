import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { Card, CardFooter } from './ui/card'
import { Download } from 'lucide-react'

interface ImageUrlProps {
    imageUrl: string;
}

const ImageCard = ({ imageUrl }: ImageUrlProps) => {
    return (
        <Card
            key={imageUrl}
            className='rounded-lg overflow-hidden hover:shadow-md'>

            <div className='relative w-full h-40 my-3 object-contain mb-8'>
                <Image src={imageUrl} alt='image' fill priority className='object-contain' />
            </div>

            <CardFooter>
                <div className='relative flex w-full mt-4'>
                    <div className="flex absolute bottom-0 w-full z-10 justify-center">
                        <Button
                            onClick={() => window.open(imageUrl)}
                            variant="secondary"
                            className="w-full">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                        </Button>
                    </div>
                </div>
            </CardFooter>
        </Card>

    )
}

export default ImageCard