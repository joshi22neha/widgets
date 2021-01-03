import './Widgets.css';
import React from 'react';

const Link = ({href, children, className}) => {
    const onClick= (event) => {
        //Handling command clicks:
        if(event.metaKey || event.ctrlKey){
            return; // returning early and preventing below steps
        }
        event.preventDefault();
        window.history.pushState({},'',href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={onClick} href={href} className={className}>
            {children}
        </a>
    );
};

export default Link;