import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Contacts from './Contacts';


const BottomPart = ({ match }) => {
    
    return (
        <div className="bg ">
            BOTTOM PART<br />
            <input placeholder="Search FROM:" />
            {/* <Link to={'/LinkTarget'}>LinkTarget</Link> */}
            {/* <Link to={'/http://haaretz.co.il'}>Haaretz</Link> */}
            <Contacts component={Contacts} />
        </div>
    )
}

export default BottomPart