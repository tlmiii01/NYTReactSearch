import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
// import dotenv from "dotenv";

// Pull in my components
import API from "../../utils/API";
import SaveBtn from "../../components/SaveBtn";
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
    if (this.state.searchTerm) {
      API.getNYTArticles(this.state.searchTerm)
        .then( res => {
          this.setState({
            articles: res.data,
            searchTerm: "",
            startyear: "",
            endyear: ""
          })
        })
        .catch(error => console.log(error));
    }
  }

  saveArticle = (id) => {
    var articleData = this.state.articles.find( article => article._id === id );
    API.saveArticle(articleData)
      .catch(error => console.log(error));
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
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                    <SaveBtn onClick={() => this.saveArticle(article._id) }/>
                  </ListItem>

                ))}
              </List>

            </div>
          ) : (
              <h2 className="text-center">Enter a search term and press Search</h2>
            )}
        </div>

      </Container >
    )
  }
}

export default Home;