import React from 'react';
import Link from './Link';

const Header =() => {
    return(
        <div className='ui secondary pointing menu'>
            <Link href='/' className='name'>
                <p> &lt; Home</p>
            </Link>
        </div>
    );
};

export default Header;