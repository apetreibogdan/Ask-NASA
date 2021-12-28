import React from 'react';
import { Link } from "react-router-dom";


function Home() {
    return (<div>
        <Link to='/today'> Today  </Link>
        <p></p>
        <Link to='/chose-date'>Chose Date</Link>
        <p></p>
        <Link to='/galery'>Galery</Link>
    </div>);
}

export default Home;
