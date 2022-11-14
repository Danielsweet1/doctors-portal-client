import React from 'react';
import img from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name:'Henry Albert',
            img: people1,
            location: 'Australia',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 2,
            name:'Alexa',
            img: people2,
            location: 'Australia',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 3,
            name:'Natalia',
            img: people3,
            location: 'Australia',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ]
    return (
        <div className='my-40'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-xl text-cyan-500 font-bold'>Testimonial</p>
                    <h4 className='text-4xl'>What Our Patients Says</h4>
                </div>
                <figure>
                    <img className='w-40' src={img} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                {
                    reviews.map(review=><TestimonialCard
                    key={review.id}
                    review={review}
                    ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonials;