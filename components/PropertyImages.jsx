import React from 'react'
import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';

const PropertyImages = ({ images }) => {
  if (!images || images.length === 0) {
    return <p>No images available</p>; // Fallback for no images
  }
  return (
    <Gallery>
    <section className='bg-blue-50 p-4'>
        <div className='container mx-auto'>
           { images.length === 1 ? (
            <Item
              original={images[0]}
              thumbnail={images[0]}
              width='1000'
              height='600'
            >
              {({ref, open}) => (
                   <Image
                   ref={ref}
                   onClick={open}
                   src={images[0]} // Corrected reference
                  alt='Property Image'
                   className='object-cover h-[400px] mx-auto rounded-xl'
                   width={1800}
                   height={400}
                   priority={true}
                 />
              )}
           
            </Item>
           ) : (
            <div className='grid grid-cols-2 gap-2'>
                {images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`
                        ${images.length === 3 && index ===2 
                        ? 'col-span-2'
                        : 'col-span-1' }
                      `}
                    >
                      <Item
                        original={image}
                        thumbnail={image}
                        width='1000'
                        height='600'
                      >
              {({ref, open}) => (

                    <Image
                        ref={ref}
                        onClick={open}
                        src={image}
                        alt={`Property Image ${index + 1}`} // Provide meaningful alt text
                        className='object-cover h-[400px] w-full rounded-xl'
                        width={500} // Use specific width
                        height={300} // Use specific height
                        sizes='100vw'
                        priority={true}
                      />
              )}
           
            </Item>
                        
                    </div>
                ))}
            </div>
           )}
        </div>
    </section>
    </Gallery>
  )
}

export default PropertyImages
