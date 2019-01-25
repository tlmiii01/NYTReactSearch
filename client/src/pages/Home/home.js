import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
// import dotenv from "dotenv";

// Pull in my components
import API from "../../utils/API";
import SaveBtn from "../../components/DeleteBtn";
import { Container, Row, Col } from "../../components/Grid";
import { Input, SubmitBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";



class Home extends Component {
  state = {
    articles: [],
    startyear: "",
    endyear: "",
    searchTerm: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const nytKey = process.env.NYT_APIKEY;
    const apiBase = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
    console.log(apiBase);

    var searchString = `${apiBase}?q=${this.state.searchTerm}&api-key=${nytKey}`
    console.log(searchString);
    
    if (this.state.searchTerm) {
      axios.get(apiBase)
      .then((response) => {
        console.log(response);
      });
      
    }
  }

  render() {
    return (
      <Container>
        <div className="card my-5">
          <h5 className="card-header text-center">Search</h5>
          <form className="mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span>Test</span>
              </div>
              <Input
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
                name="searchTerm"
                placeholder="Title (required)"
              />
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <span>Start Year</span>
              </div>
              <Input
                value={this.state.startyear}
                onChange={this.handleInputChange}
                name="startyear"
                placeholder="Start Year"
              />
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <span>End Year</span>
              </div>
              <Input
                value={this.state.endyear}
                onChange={this.handleInputChange}
                name="endyear"
                placeholder="End Year"
              />
            </div>

            <SubmitBtn onClick={this.handleFormSubmit}>
              Search!
            </SubmitBtn>
          </form>
        </div>
        <div>
          {this.state.articles.length ? (
            <div className="card my-5">
              <h5 className="card-header text-center">Results</h5>

            </div>
          ) : (
              <h5>This is a test</h5>
            )}
        </div>

      </Container >
    )
  }
}

export default Home;