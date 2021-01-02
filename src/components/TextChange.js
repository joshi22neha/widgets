import './Widgets.css';
import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
];

const TextChange = () => {
    const [selected,setSelected] = useState(options[0]);
    return(
        <div>
            <Dropdown label='Select a color' selected={selected} onSelectChange={setSelected} options={options} />
            <p className= {selected.value}>This is {selected.value} text!</p>
        </div>
    );
};

export default TextChange;