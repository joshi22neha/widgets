import './Widgets.css';
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import Header from './Header';

const options = [
    {
        label: "Afrikaans",
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        Value: 'nl'
    } 
];

const Translate = () => {
    const [language,setLanguage]=useState(options[0]);
    const [text,setText] = useState('');
    return(
        <div>
            <Header/>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={text} onChange={e => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown label='Select a language' selected={language} onSelectChange={setLanguage} options={options} />
            <hr/>
            <h3 className='ui header'>Output:</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;