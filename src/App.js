import React from 'react';
import Fun_btn from './componets/Fun_btn';
import Cls_btn from './componets/Cls_btn';
import './index.css';

const App = () => {
    return (
        <>
          <div className="continer">
            <div className="header">
              <h1 className="title">Styling using Functional and Class Component</h1>
            </div>
            <div className="box-continer">
                <Fun_btn />
                <Cls_btn />
            </div>
          </div>
        </>
    )
}
export default App;