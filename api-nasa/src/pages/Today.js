import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fetch from "../services/apiService";


function Today() {
    const [ceva, setCeva] = useState('');
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <h1>Today's page</h1>
            <div>
                <Fetch ceva='2020-10-10' />
            </div>
        </div>
    );
}
export default Today
