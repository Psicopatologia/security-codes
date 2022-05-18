import React from 'react';

function UseState({ name }) {
    const [error, setError] = React.useState(false);

    return (
        <div>
            <h2>Delete {name}</h2>
            <p>
                Write your security code  
            </p>
            {error && (
                <p>Error: Wrong security code</p>
            )}
            {loading && (
                <p>Loading...</p>
            )}
            <input placeholder="Security code" />
            <button
                onClick={() => setError(!error)}
            >
                Check
            </button>
        </div>
    )
}

export { UseState };