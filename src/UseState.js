import React from 'react';

const SECURITY_CODE = '123';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        delete: false,
        confirmed: false,
    });

    React.useEffect(() => {
        if (state.loading) {
            if (state.value !== SECURITY_CODE) {
                setState({
                    ...state,
                    error: true,
                    loading: false
                })
            } else {
                setState({
                    ...state,
                    loading: false,
                    confirmed: true
                })
            }
        }
    }, [state.loading]);

    if (!state.delete && !state.confirmed) {
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
                        setState({
                            ...state,
                            value: event.target.value
                        });
                    }}
                />
                <button
                    onClick={
                        () => setState({ ...state, loading: true, error: false })
                    }
                >
                    Check
                </button>
            </div>
        )
    } else if (state.confirmed && !state.delete) {
        return (
            <React.Fragment>
                <h1>Delete useState</h1>
                <p>Are you sure?</p>
                <button
                    onClick={() => setState({ ...state, delete: true, value: '' })}
                >
                    Delete
                </button>
                <button
                    onClick={() => setState({ ...state, confirmed: false, value: '' })}
                >
                    Cancel
                </button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <p>Successfully deleted</p>
                <button
                    onClick={() => setState({ ...state, delete: false, confirmed: false })}
                >
                    Go back
                </button>
            </React.Fragment>
        )
    }
}

export { UseState };