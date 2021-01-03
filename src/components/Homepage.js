import './Widgets.css';
import React from 'react';
import Link from './Link';

const Homepage =() => {
    return(
        <div className="grid-container">
            
                <div className="item1">
                    <div className="cards">
                    <Link href='/accordion' className='name'>
                        <p><b>Accordion</b></p>
                        <p>The Accordion Widget is used to display text in a collapsed, condensed manner, letting you save space while still presenting an abundance of content</p>
                        <span className="homepageIcon">
                            <img src="images/favicon-32x32.png" />
                        </span></Link>
                    </div>
                </div>   
            
            
                <div className="item2">
                    <div className="cards">
                    <Link href='/search' className='name'>
                        <p><b>Search</b></p>
                        <p>The search widget provides a customizable search interface for web applications</p>
                        <span className="homepageIcon">
                            <img src="http://www.w3.org/2000/svg" />
                        </span></Link>
                    </div>
                </div>   
            
            
                <div className="item3">
                    <div className="cards">
                    <Link href='/textChange' className='name'>
                        <p><b>Dropdown</b></p>
                        <p>Dropdowns allow to toggle an element's visibility. They usually contain some sort of navigation, be it a bare list of links, or more complex elements</p>
                        <span className="homepageIcon">
                            <img src="images/icon-team-builder.svg" />
                        </span></Link>
                    </div>
                </div>   
            
            
                <div className="item4">
                    <div className="cards">
                    <Link href='/translate' className='name'>
                        <p><b>Translate</b></p>
                        <p>This widget is used to translate content from English language to Afrikaans/ Arabic/ Hindi/ Dutch</p>
                        <span className="homepageIcon">
                            <img src="images/icon-calculator.svg" />
                        </span></Link>
                    </div>
                </div>   
            
        </div>
    );
};

export default Homepage;