import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robort } from "./Robort";

class App extends Component {
    constructor(){
        super()
        this.state = {
            robort: robort,
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filterRoborts = this.state.robort.filter(robort => {
            return robort.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return(
            <div className="tc">
                <h1 className="f1">ROBORTFRIENDS </h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <CardList robort = {filterRoborts} />
            </div>
        );
    }
}


export default App;