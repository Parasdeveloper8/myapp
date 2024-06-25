import React, { useState, useEffect } from "react";

const ApiComponent = () => {
    const [firstImageData, setFirstImageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let y = 0;
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/photos");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                if (jsonData && jsonData.length > 0) {
                    setFirstImageData(jsonData[y]); // Set the first image data in state
                }
                console.log(jsonData); // Log the fetched data to the console
            } catch (error) {
                console.error('Error fetching data: ', error);
                // Handle error as needed
            }
        };

        fetchData(); // Call fetchData function when component mounts
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div>
            {firstImageData ? (
                <div>
                    <h2>First Image from API</h2>
                    <img src={firstImageData.url} alt={firstImageData.title} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ApiComponent;
