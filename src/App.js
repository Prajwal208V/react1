import React from 'react';
import FunctionBox from './componets/FunctionBox';
import ClassBox from './componets/ClassBox';
import './index.css';

const App = () => {
    return (
        <>
          <div className="continer">
            <div className="header">
              <h1 className="title">Styling using Functional and Class Component</h1>
            </div>
            <div className="box-continer">
                <FunctionBox /> 
                <ClassBox />
            </div>
          </div>
        </>
    )
}
export default App;