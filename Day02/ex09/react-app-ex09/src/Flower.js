import React, {Component} from 'react';

class Flower extends Component {
    render () {
        const colorOfFlower = this.props.color;
        return (
            <h2>This is a {colorOfFlower} Flower!</h2>
        )
        
    }
}
export default Flower