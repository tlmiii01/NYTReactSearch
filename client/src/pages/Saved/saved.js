import React, {Component} from "react"

// Pull in my components
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Saved extends Component {
  state = {
    savedArticles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then( result => {
        this.setState({savedArticles: result.data})
      })
      .catch(error => console.log(error));
  };

  deleteArticle = (id) => {
    API.deleteArticle(id)
      .then(this.loadArticles())
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Container>
        <div>
          {this.state.savedArticles ? (
            <div className="card my-5">
            <h5 className="card-header text-center">Saved Articles</h5>
            <List>
              {this.state.savedArticles.map(article => (
                <ListItem key={article._id}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                  <DeleteBtn onClick={() => this.deleteArticle(article._id) }/>
                </ListItem>
              ))}
            </List>
          </div>
          ) : (
            <h2>No saved articles to display!!</h2>
          )}
        </div>
      </Container>
    )
  }



}

export default Saved;



