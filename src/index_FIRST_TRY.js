import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Link, Router} from 'react-router-dom';
import './index.css';
import './css/my_index.css';
// import App from './App';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//     <h1>Hi dude!!!</h1>, 
//     document.getElementById('root')
// );

// OR
// const bless_me = 'I love you chicko!';
// function another_blessing(name1){
//     return name1+ '!! <3';
// }
// // const hi_me = <h1>Hi dude!!! {bless_me}</h1>;
// const hi_me_2 = <h2>Hi dude!!! {another_blessing(bless_me)}</h2>;

// OR
// const obj_1 = {name: 'Shahar', family: 'Haramati Cohen'} 
// function another_blessing(obj){
//     return obj.name + ' ' + obj.family + '!! <3';
// }
// const hi_me_3 = <h1>Hi dude!!! {another_blessing(obj_1)}</h1>;


// const header = 
const user = {name: 'Shahar', family: 'Haramati Cohen'}
const content = <section className="main_content">Content</section>
const footer = <footer>Footer</footer>

function header(props){
    return(
        <header>
            <h1>Shalom {props.name} {props.family}</h1>
        </header>
    )
}
function page(params){
    return(
        <div className="bg">
            {header(user)}
            {content}
            {footer}
        </div>
    )
}

ReactDOM.render(
    // hi_me, 
    // hi_me_2, 
    // hi_me_3, 
    // page(), 
    page(), 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
