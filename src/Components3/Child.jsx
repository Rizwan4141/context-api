import React, { useContext } from 'react';
import { Globalnfo } from './Main';
import SuperChild from './SuperChild';

const Child = () => {
    const {appColor}=useContext(Globalnfo)
    console.warn("appColor",appColor)
    return (
        <div>
           <h1 style={{color:appColor}}>Child Comp</h1> 
           <SuperChild/>
        </div>
    );
};

export default Child;