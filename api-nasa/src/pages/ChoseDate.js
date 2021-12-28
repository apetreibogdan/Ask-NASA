import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Fetch from "../services/apiService";

function ChoseDate() {
    const [itemInput, setItemInput] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setItemInput(`date=${e.target[0].value}`);
        console.log(itemInput)
    };

    function Display() {
        return (
            <Fetch ceva={itemInput}></Fetch>
        );
    };


    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <form onSubmit={handleSubmit} >
                <label>
                    <p>Insert Date</p>
                    <input type="text" />
                </label>
                <button type="submit">Submit</button>
            </form>
            <div>
                <Display></Display>

            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    );
}
export default ChoseDate;