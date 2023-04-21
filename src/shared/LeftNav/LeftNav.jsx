import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './leftNav.css'

const LeftNav = () => {
    const [data, setData ] = useState([]) 


    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(error=>console.log(error.message))
    },[])

    return (
        <div>
            <h2>All category</h2>
            {
                data.map(dt=><p dt={dt.id}><Link to={`/category/${dt.id}`} className='theleft'>{dt.name}</Link></p> )
            }
        </div>
    );
};

export default LeftNav;