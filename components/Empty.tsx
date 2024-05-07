import Image from 'next/image'
import React from 'react'

const Empty = () => {
    return (
        <>
            <div className="flex justify-center items-center object-contain mt-2">
                <Image
                    src="/type.png"
                    alt="prompt image"
                    width={320}
                    height={320}
                    className="object-contain" />
            </div>

            <p className="text-center mt-4 text-muted-foreground">No images generated!</p>
        </>
    )
}

export default Empty