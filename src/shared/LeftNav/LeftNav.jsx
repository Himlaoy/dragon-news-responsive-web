import React, { useEffect, useState } from 'react';

const LeftNav = () => {
    // const [data, setData ] = useState([]) 


    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error.message))
    },[])

    return (
        <div>
            <h2>leftNav</h2>
        </div>
    );
};

export default LeftNav;