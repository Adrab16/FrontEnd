import React from 'react';
import {MDBCarousel,MDBCarouselItem,} from 'mdb-react-ui-kit';

export default function MangaTheque() {
  return (
<MDBCarousel showIndicators showControls fade style={{ width: '100%' , height: '200px'}}>
<MDBCarouselItem
    className='w-100 d-block'
    itemId={1}
    src='OnePiece.jpg'
    alt='...'
  >
        
      </MDBCarouselItem>

      <MDBCarouselItem
    className='w-100 d-block'
    itemId={2}
    src='Naruto.jpg'
    alt='...'
  >
       
      </MDBCarouselItem>

      <MDBCarouselItem
    className='w-100 d-block'
    itemId={3}
    src='Bleach.jpg'
    alt='...'
  >
        
      </MDBCarouselItem>
    </MDBCarousel>
  );
}