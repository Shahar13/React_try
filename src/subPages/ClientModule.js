import React from 'react';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const ClientModule = ({ match }) => {
    
    return (
        <div className="bg ">
            Client Page: [to <a href="/admin/1">ClientModule</a>]<br />
            Hello <strong>USER-NAME-EMAIL</strong>
            <br />
            <strong>Manger-Name</strong> invited you to vote for your preferred date and time.
            <div>
                TAKE YOUR ECTION DUDE!
            </div>
            <strong>Location of the event:</strong>
            <br />
            HERE.
            <br /><br />
            <strong>Message Body:</strong>
            <br />
            Message body message body message body message body message body message body message body 
            <br /><br />
            Please enter you full name 
            <br />
            <input placeholder="Your Full Name" />

            <br />
            <strong>
                You can send your textual feedback to <strong>Manger-Name</strong> here:
            </strong>
            <br />
            <textarea className="textarea_1" placeholder="Your Message to Manager"></textarea>
            <br />
            <button>Send Your Shoot</button>
            <br />
            
            {/* <Link to={'/LinkTarget'}>LinkTarget</Link> */}
            {/* <Link to={'/http://ynet.co.il'}>Ynet</Link> */}
            
            {/* <Contacts component={Contacts} /> */}


        </div>
    )
}

export default ClientModule