import React from "react";
import "./SearchResults.css";

const SearchResults = Props => {
    return (
                <div className="column">
                    <div className="ui fluid card">
                        <div className="image">
                            <img src={Props.img_link} className="res_img"/>
                        </div>
                        <div className="content">
                            <a className="header">{Props.name}</a>
                        </div>
                    </div>
                </div>
    )
}


export default SearchResults;
