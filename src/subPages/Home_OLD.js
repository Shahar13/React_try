import React from 'react';
import TopPart from './TopPart';
import BottomPart from './BottomPart';


const Home = ({ match }) => {
    
    return (
        <div className="bg ">
            {/* Page NAME {match.params.id} */}
            <TopPart />
            <div></div>
            <BottomPart />
        </div>
    )
}

export default Home