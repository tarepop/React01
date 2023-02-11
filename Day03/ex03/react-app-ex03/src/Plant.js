import React, {Component} from 'react';

class Plant extends Component {

    constructor (props) {
        super(props);
        this.state = { 
            type: "Flowering plant" 
        }
    }
    render() {
        return (
        <div>
            <h2>Plant type is {this.state.type}</h2>
            <button type='button' onClick={this.changeType}>
                Change type
            </button>
        </div>
        )
    }

    changeType = () => {
        this.setState({type: "Non flowering plant"});
    }
}

export default Plant