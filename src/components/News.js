import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import { getNews } from "../actions/newsActions";
import PropTypes from "prop-types";
class News extends Component {
  componentDidMount() {
    this.props.getNews();
  }
  render() {
    const { news, loading } = this.props.news;

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className="container">
          {news && news.length > 0 ? (
            news.map((item, i) => {
              return (
                <div key={i}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              );
            })
          ) : (
            <h2>Ошибка</h2>
          )}
          <h1>Всего новостей {news.length}</h1>
        </div>
      );
    }
  }
}

News.propTypes = {
  news: PropTypes.object.isRequired,
  getNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(mapStateToProps, { getNews })(News);
