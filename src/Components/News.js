import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

//API Key= e4a021c718c14a0793c0dac078900578
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general",
    border: "primary",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    } - NewsMonkey`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseddata = await data.json();
    this.props.setProgress(50);
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      totalResult: parseddata.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  // Runs after render
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4a021c718c14a0793c0dac078900578&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseddata = await data.json();
    // console.log(parseddata);
    // this.setState({
    //   articles: parseddata.articles,
    //   totalResult: parseddata.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }

  handlePreviousClick = async () => {
    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=e4a021c718c14a0793c0dac078900578&page=${
    //   this.props.page - 1
    // }&pageSize=${this.state.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseddata = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseddata.articles,
    //   loading: false,
    // });
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    // console.log("Next");
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResult / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=e4a021c718c14a0793c0dac078900578&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parseddata = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parseddata.articles,
    //     loading: false,
    //   });
    // }
    this.setState({
      page: this.state.page + 1,
    });
  };

  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    this.setState({
      page: this.state.page,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4a021c718c14a0793c0dac078900578&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: this.articles.concat(parseddata.articles),
      totalResult: parseddata.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center my-3">
          NewsMonkey - Top `$
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}
          ` Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {/* {!this.state.loading && */}
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description !== null
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      border
                      date={element.publishedAt.slice(0, 10)}
                      author={element.author ? element.author : "Unknown"}
                      source={element.source.name}
                      imgurl={
                        element.urlToImage
                          ? element.urlToImage
                          : "data:image/png;base64,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"
                      }
                      newsurl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1 ? true : false}
            type="button"
            className="btn btn-dark mx-2 "
            onClick={this.handlePreviousClick}
          >
            &#8592; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResult / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark mx-2 "
            onClick={this.handleNextClick}
          >
            Next &#8594;
          </button>
        </div> */}
       
        </>
    );
  }
}

export default News;
