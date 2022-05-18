import React from 'react';

class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false
        }
    }
    render() {
        return (
            <div>
                <h2>Delete {this.props.name}</h2>
                <p>
                    Write your security code  
                </p>
                {this.state.error && (
                    <p>Error: Wrong security code</p>
                )}
                <input placeholder="Security code" />
                <button
                    onClick={() => 
                        this.setState(prevState=> ({error: !prevState.error}))
                    }
                >
                    Check
                </button>
            </div>
        )
    }
}

export { ClassState };