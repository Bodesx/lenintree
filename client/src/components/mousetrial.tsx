'use client';
import React from 'react';

import ImageMouseTrail from '@/components/core/mousetrail';

const images = [
  'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=1200&auto=format',
  
];
export default function Mousehero() {
  return (
   
      <ImageMouseTrail
        items={images}
        maxNumberOfImages={5}
        distance={25}
        imgClass='sm:w-40 w-28 sm:h-48 h-36'
      >
        <article className='relative z-50 mix-blend-difference'>
          <h1 className='lg:text-4xl md:text-3xl text-xl text-center font-semibold mix-blend-difference'>
            ✨ Experience  learning the best way
          </h1>
        </article>
      </ImageMouseTrail>
    
  );
}
