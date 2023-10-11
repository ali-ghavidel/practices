import React, { useEffect, useState } from 'react';
import Hello from './Hello';
import Timer from './Timer';

import './style.css';
import { TestContext } from './TestContext';

const App = () => {
    const [title, setTitle] = useState('welcome to my project')
    const [isLight, setIsLight] = useState(false);
    const [timeArr, setTimeArr] = useState(['00:06:35', '00:30:06']);
    useEffect(() => {
        //componentDidMout , if array filled + componentDidUpdate
        console.log('useEffect');
        //componentDidUnmount
        return () => {

        }
    },[isLight]);
    const handleSetIsLight = () => {
        setIsLight(!isLight);
    }
    
    return (
        <TestContext.Provider value={{
            timeArr: timeArr,
            setTimeArr: setTimeArr
        }}>
            <div className={`${isLight ? "main-light" : "main-dark"}`}>
                <Hello title={title} />
                <Timer isLight={isLight} handleSetIsLight={handleSetIsLight} />
            </div>
        </TestContext.Provider>
    );

}

export default App;
