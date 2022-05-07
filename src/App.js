import './App.css';
import CompA from './Components/CompA';
// import Main from './Components3/Main';

import { createContext } from 'react';
const FirstName=createContext()
const LastName=createContext()

function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"Rizwan"}>
        <LastName.Provider value={"Rafe"}>
          <CompA/>
        </LastName.Provider>
      </FirstName.Provider> 
      {/* <CompA/> */}
      {/* <Main/> */}
    </div>
  );
}

export default App;
// export{ FirstName,LastName}
