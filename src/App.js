import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_APIKEY;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"general"}
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>

            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"business"}
                  pagesize={this.pageSize}
                  country="in"
                  category="business"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"entertainment"}
                  pagesize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"health"}
                  border="primary"
                  pagesize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"science"}
                  border="primary"
                  pagesize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"sports"}
                  border="primary"
                  pagesize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"technology"}
                  border="primary"
                  pagesize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
