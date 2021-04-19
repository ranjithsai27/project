import React, { Component } from "react";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search_data: null
        }
    }

    onInputChange = (e) => {
        this.setState({
            search_data: e.target.value
        })
    }

    OnFormSubmit = e =>{
        e.preventDefault();
      console.log(this.state.search_data);
      this.props.onSubmit(this.state.search_data);
    }

    render() {
        return (
            <div className="ui container">
                <div className="myform">
                    <form onSubmit={this.OnFormSubmit}>
                        <div className="ui focus icon input">
                            <i className="search icon"></i>
                            <input type="text"  onChange={this.onInputChange} placeholder="Search ...." />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};


export default Search;