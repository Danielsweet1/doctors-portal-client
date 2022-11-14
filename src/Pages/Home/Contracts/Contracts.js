import React from 'react';
import { FaPhoneAlt, FaSearchLocation, FaClock } from 'react-icons/fa';
import img from '../../../assets/icons/marker.svg'

const Contracts = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-40 text-white gap-5'>
            <div className='flex justify-evenly  bg-cyan-500 rounded-lg p-5 items-center'>
                <FaClock className='text-white text-9xl mr-5'/>
                <div>
                    <h4 className='font-bold text-xl mb-3'>Opening Hours</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, alias a? Fugiat itaque laudantium consectetur?</p>
                </div>
            </div>
            <div className='flex justify-evenly  bg-slate-600 rounded-lg p-5 items-center'>
                <img className='mr-5' src={img} alt="" />
                <div>
                    <h4 className='font-bold text-xl mb-3'>Visit Our Location</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, alias a? Fugiat itaque laudantium consectetur?</p>
                </div>
            </div>
            <div className='flex justify-evenly  bg-cyan-500 rounded-lg p-5 items-center'>
                <FaPhoneAlt className='text-white text-9xl mr-5'/>
                <div>
                    <h4 className='font-bold text-xl mb-3'>Contact us Now</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, alias a? Fugiat itaque laudantium consectetur?</p>
                </div>
            </div>
        </div>
    );
};

export default Contracts;