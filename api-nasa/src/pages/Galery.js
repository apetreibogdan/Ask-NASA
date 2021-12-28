import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Fetch from "../services/apiService";

function ChoseDate() {
    const [itemInput, setItemInput] = useState(null);
    const [start_date, setStart_date] = useState(null);
    const [end_date, setEnd_date] = useState(null);



    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        setStart_date(e.target[0].value);
        setEnd_date(e.target[1].value);
        setItemInput(`start_date=${start_date}&end_date${end_date}&`)
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
                    start_date
                    <input type="text" label='start_date'/>
                    end_date
                    <input type="text" label='end_date'/>
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