import React from 'react';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import PickyDateTime from 'react-picky-date-time';
import ManagerCalendar from './ManagerCalendar';

const RegistrationModule = ({ match }) => {

    return (
        <div className="bg_1 ">
            Manager Page: [to <a href="/user/1">ClientModule</a>]<br />
            <div id="justTime"></div>
            <input placeholder="Your Name" />
            <br />
            <input placeholder="Location of meeting" />
            <br />
            <textarea className="textarea_1" placeholder="Your Message"></textarea>
            <br />
            <ManagerCalendar />
           
            <br />
            <input placeholder="Add recipient emails" />
            <br />
            <button>Send invitaion</button>
            <br />

            {/* <Link to={'/LinkTarget'}>LinkTarget</Link> */}
            {/* <Link to={'/http://ynet.co.il'}>Ynet</Link> */}

            {/* <Contacts component={Contacts} /> */}


        </div>
    )
}

export default RegistrationModule