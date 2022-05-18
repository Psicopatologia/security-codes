import React from 'react';

function UseState({ name }) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        console.log("Empezando efecto")
        if (loading) {
            setTimeout(() =>{
                console.log("haciendo")
                setLoading(false)
                console.log("terminando")
            }, 3000)
        }
        console.log("Terminando ef")
    }, [loading]);

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
                onClick={() => setLoading(true)}
            >
                Check
            </button>
        </div>
    )
}

export { UseState };