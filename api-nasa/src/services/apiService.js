
import React from "react";
import { useState, useEffect } from "react";



function Fetch(props) {

    const apiKey = process.env.REACT_APP_NASA_KEY;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?date=${props.ceva}&api_key=${apiKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        if (items.length > 1) {
            return (

                <ul>
                    {items.map(item => (
                        <li key={item.title}>
                            {item.img}
                        </li>
                    ))}
                </ul>
            )
        }
        else {
            console.log(items);

            return (<div>
                <h1>{items.title}</h1>
                <img src={items.url} alt={items.title} />
                <p>{items.explanation}</p>
                </div>
            )
        };
    }
}
export default Fetch;