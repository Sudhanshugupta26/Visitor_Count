import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [visits, setVisits] = useState(0);

    useEffect(() => {
        // Get the visitor count from localStorage
        let visitCount = localStorage.getItem('visitCount');
        if (!visitCount) {
            visitCount = 0;
        }
        visitCount = parseInt(visitCount) + 1;
        setVisits(visitCount);

        // Update the count in localStorage
        localStorage.setItem('visitCount', visitCount);
    }, []);

    return (
        <div className="app">
            <div className="box">
                <h1>Page Visitors</h1>
                <p>{visits}</p>
            </div>
        </div>
    );
}

export default App;
