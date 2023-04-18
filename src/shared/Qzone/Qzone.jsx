import React from 'react';
import Qzon1 from '../../assets/qZone1.png'
import Qzon2 from '../../assets/qZone2.png'
import Qzon3 from '../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-secondary px-1 rounded py-4 my-4 mx-center'>
            <h2>Q-zone</h2>
            <img src={Qzon1} alt="" />
            <img src={Qzon2} alt="" />
            <img src={Qzon3} alt="" />
        </div>
    );
};

export default Qzone;