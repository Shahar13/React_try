import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Contacts from './Contacts';

const TopPart = ({ match }) => {
    
    return (
        <div className="bg_1 ">
            TOP PART<br />
            <input placeholder="Search TO:" />
            {/* <Link to={'/LinkTarget'}>LinkTarget</Link> */}
            {/* <Link to={'/http://ynet.co.il'}>Ynet</Link> */}
            <Contacts component={Contacts} />
        </div>
    )
}

export default TopPart