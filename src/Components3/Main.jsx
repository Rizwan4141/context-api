import React,{createContext,useState} from 'react';
import Child from './Child';
import OtherChild from './OtherChild';
export const Globalnfo=createContext()

const Main = () => {
  const [color, setcolor] = useState("red")
  const [day,setDay]=useState("Monday")
  const getDay=(item)=>{
  console.warn(item)
  setDay(item)
  }

    return (
        <Globalnfo.Provider value={{appColor:color,getDay:getDay}}>
        <div>
          <h1>Main Components {day}</h1> 
          <Child/>
          <OtherChild/>
        </div>
        </Globalnfo.Provider>
    );
};

export default Main;