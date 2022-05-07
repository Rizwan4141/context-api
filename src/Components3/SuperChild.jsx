import React, { useContext } from 'react';
import { Globalnfo } from './Main';

const SuperChild = () => {
    const {appColor,getDay}=useContext(Globalnfo)
    const day="Sunday"
    return (
        <div>
           <h1 style={{color:appColor}}>Super Child </h1> 
           <button onClick={()=>getDay(day)}>Click me</button>
        </div>
    );
};

export default SuperChild;