import React, { Component } from "react";

class TransformText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            transformedText: ""
        };
    }

    handleChange = event => {
        this.setState({ text: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ transformedText: this.state.text.toUpperCase() });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Text:
                        <input type="text" value={this.state.text} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <p>{this.state.transformedText}</p>
            </div>
        );
    }
}
export default TransformText;
