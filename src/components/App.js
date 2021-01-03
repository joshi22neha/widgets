import './Widgets.css';
import React, {useState} from 'react';
import Accordion from './Accordion';
import TextChange from './TextChange';
import Search from './Search';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';
import Homepage from './Homepage';
const items = [
    {
        title: 'What is React?',
        content: 'React is ajavascript front-end library'
    },
    {
        title: 'Why use React?',
        content: 'React is favourite js library among engineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components'
    }
];



/*const showAccordion = () => {
    if(window.location.pathname==='/'){
        return <Accordion items={items} />
    }
};

const showSearch = () => {
    if(window.location.pathname==='/search'){
        return <Search />
    }
};

const showTextChange = () => {
    if(window.location.pathname==='/textChange'){
        return <TextChange/>
    }
};

const showTranslate = () => {
    if(window.location.pathname==='/translate'){
        return <Translate/>
    }
};*/

//Instead Building a reusable route component



export default () => {
    

    /*return(
        <div className='ui container' >
            {showAccordion()}
            {showSearch()}
            {showTextChange()}
            {showTranslate()}
        </div>
    );*/

    return(
        <div className='container'>
            <div className="HomepageText">
          <p>Widgets </p>
          <p><b> Powered by Technology</b></p>
          <p><small>Widget is an application, or a component of an interface, that enables a user to perform a function or access a service.</small></p>  
        </div>
            <Route path='/'>
                <Homepage />
            </Route>
            <Route path='/accordion'>
                <Accordion items={items} />
            </Route>
            <Route path='/search'>
                <Search />
            </Route>
            <Route path='/textChange'>
                <TextChange />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );
};