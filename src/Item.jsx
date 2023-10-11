import React, { useContext } from 'react';
import { TestContext } from './TestContext';


const Item = (props) => {

    const context = useContext(TestContext)

    const handleDeleteItem = () => {
        const contextFiltered = context.timeArr.filter((value) => {
            return value !== props.children;
        });
        context.setTimeArr(contextFiltered);
    }
    return (
        <div className='laps' onClick={handleDeleteItem}>
            {props.children}
        </div>
    );
}

export default Item;
