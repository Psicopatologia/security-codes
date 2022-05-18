import React from 'react';

class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            loading: false
        }
    }

    componentDidUpdate() {
        if (this.state.loading) {
            setTimeout(() =>{
                console.log("haciendo")
                this.setState({loading: false})
                console.log("terminando")
            }, 3000)
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
                {this.state.loading && (
                    <p>Loading...</p>
                )}
                <input placeholder="Security code" />
                <button
                    onClick={() => 
                        this.setState({loading: true})
                    }
                >
                    Check
                </button>
            </div>
        )
    }
}

export { ClassState };