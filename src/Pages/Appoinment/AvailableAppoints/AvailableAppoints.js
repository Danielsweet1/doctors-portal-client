import { format } from 'date-fns';
import React from 'react';

const AvailableAppoints = ({selectedDate}) => {
    return (
        <div>
            <h2 className='text-center font-bold text-xl text-cyan-500'>Available Appointments on {format(selectedDate, 'PP')}</h2>
        </div>
    );
};

export default AvailableAppoints;