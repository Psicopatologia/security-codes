import React from 'react';

const SECURITY_CODE = '123';

function UseState({ name }) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        if (loading) {
            setTimeout(() =>{
                if (value !== SECURITY_CODE) {
                    setError(true)
                }
                setLoading(false)
            }, 1000)
        }
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
            <input
                placeholder="Security code"
                value={value}
                onChange={(event)=> {
                    setValue(event.target.value);
                }}
                />
            <button
                onClick={
                    () => {
                        setLoading(true);
                        setError(false);
                    }
                }
            >
                Check
            </button>
        </div>
    )
}

export { UseState };