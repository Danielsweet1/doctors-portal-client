import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contracts from '../Contracts/Contracts';
import ContractUs from '../ContractUs/ContractUs';
import DentalCare from '../DentalCare/DentalCare';
import Services from '../Services/Services';
import Testimonials from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mt-20'>
            <Banner></Banner>
            <Contracts></Contracts>
            <Services></Services>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <ContractUs></ContractUs>
        </div>
    );
};

export default Home;