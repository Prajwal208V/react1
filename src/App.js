import React from 'react';
import Fun_btn from './componets/Fun_btn';
import Cls_btn from './componets/Cls_btn';
import Fun_box from './componets/Fun_box';
import Cls_box from './componets/Cls_box';
import './index.css';

const App = () => {
    return (
        <>
            <div className="continer">
                <h1 className="header">Styling using Functional and Class Component</h1>
                <div className="button-box">
                    <Fun_btn />
                    <Cls_btn />
                </div>
                <div className="box-continer">
                    <Fun_box />
                    <Cls_box />
                </div>
            </div>
        </>
    )
}
export default App;