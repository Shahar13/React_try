import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './css/App.css';
import './css/style.css';
// import Page from './subPages/Page';
// import Home from './subPages/Home';
import TopPart from './subPages/TopPart';
import BottomPart from './subPages/BottomPart';
import RegistrationModule from './subPages/RegistrationModule';
import ClientModule from './subPages/ClientModule';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='page'>
          {/* 
            <header>
              <div className='menuItem'>
                <Link to={`/`}>
                  HOME
                </Link>
              </div>
              <div className='menuItem'>
                <Link to={`/pages/1`}>
                  page 1
                </Link>
              </div>
              <div className='menuItem'>
                <Link to={`/pages/2`}>
                  page 2
                </Link>
              </div>
              <div className='menuItem'>
                <Link to={`/pages/3`}>
                  page 3
                </Link>
              </div>
            </header>
           */}
          <div className='border wrapper'>
            {/* <h1>Hello</h1> */}
            {/* TOP PART */}
            {/* <Route exact={true} path='/' component={Home} /> */}
            {/* <TopPart component={TopPart} />  */}

            {/* BOTTOM PART */}
            <Route path='/admin/:id' component={RegistrationModule} />
            <Route path='/user/:id' component={ClientModule} />
            {/* <BottomPart component={BottomPart} />  */}
            {/* ########################################## */}
            {/* <ManagerPage /> */}
                    {/* <RegistrationModule Component={RegistrationModule} /> */}
                    {/* <ClientModule Component={ClientModule} /> */}
            {/* <UserPage /> */}

          </div>
        </div>
      </Router >
    );
  }
}

export default App;
