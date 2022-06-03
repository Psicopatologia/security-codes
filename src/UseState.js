import React from 'react';

const SECURITY_CODE = '123';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
    });
    console.log(state)

    React.useEffect(() => {
        if (state.loading) {
            setTimeout(() => {
                if (state.value !== SECURITY_CODE) {
                    console.log("hola")
                    setState({...state, error: true, loading: false })
                    console.log(state)
                } else {
                    setState({...state, loading: false })
                }
            }, 1000)
        }
    }, [state.loading]);

    return (
        <div>
            <h2>Delete {name}</h2>
            <p>
                Write your security code
            </p>
            {state.error && (
                <p>Error: Wrong security code</p>
            )}
            {state.loading && (
                <p>Loading...</p>
            )}
            <input
                placeholder="Security code"
                value={state.value}
                onChange={(event) => {
                    setState({...state,
                        value: event.target.value
                    });
                }}
            />
            <button
                onClick={
                    () => setState({...state, loading: true, error: false })
                }
            >
                Check
            </button>
        </div>
    )
}

export { UseState };