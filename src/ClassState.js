import React from 'react';

class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.SECURITY_CODE = '123';
        this.state = {
            value: '',
            error: false,
            loading: false
        }
    }

    componentDidUpdate() {
        if (this.state.loading) {
            setTimeout(() => {
                if (this.state.value !== this.SECURITY_CODE) {
                    this.setState({ error: true })
                }
                this.setState({ loading: false })
            }, 1000)
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
                <input
                    placeholder="Security code"
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value })
                    }}
                />
                <button
                    onClick={() =>
                        this.setState({
                            loading: true,
                            error: false
                        })
                    }
                >
                    Check
                </button>
            </div>
        )
    }
}

export { ClassState };