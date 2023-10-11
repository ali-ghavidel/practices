import React, { useContext } from 'react';
import Item from './Item';
import { TestContext } from './TestContext';
const TimeList = (props) => {

    const context = useContext(TestContext);

    return (
        <div className='timeList'>
            {context.timeArr.map((value, key) => {
                return (
                    <Item key={key}>
                        {value}
                    </Item>
                )
            })}
        </div>
    );
}

export default TimeList;
