import React, {Component} from "react";
import Table from "./Table";

class App extends Component {
    state = {
        characters: [
            {
                firstName: 'Lary',
                lastName: 'Page',
            },
            {
                firstName: 'Ada',
                lastName: 'Lovelace',
            },
            {
                firstName: 'Alan',
                lastName: 'Tureing',
            },
        ],
    }
    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <Table characterData = { characters } removeCharacter = {this.removeCharacter} />
            </div>
        )
    }

    removeCharacter = (index) => {
        const {characters} = this.state;

        this.setState ({
            characters: characters.filter((character, i) => {
                return i !== index;
            }),
        })
    }
}

export default App;