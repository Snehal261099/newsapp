import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_APIKEY;

  const [setProgress, setprogress] = useState(0);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" setProgress={setprogress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setprogress}
                key={"general"}
                pageSize={pageSize}
                country="in"
                category="general"
                apiKey={apiKey}
              />
            }
          ></Route>

          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setprogress}
                key={"business"}
                pagesize={pageSize}
                country="in"
                category="business"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setprogress}
                key={"entertainment"}
                pagesize={pageSize}
                country="in"
                category="entertainment"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setprogress}
                key={"health"}
                border="primary"
                pagesize={pageSize}
                country="in"
                category="health"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setprogress}
                key={"science"}
                border="primary"
                pagesize={pageSize}
                country="in"
                category="science"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setprogress}
                key={"sports"}
                border="primary"
                pagesize={pageSize}
                country="in"
                category="sports"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setprogress}
                key={"technology"}
                border="primary"
                pagesize={pageSize}
                country="in"
                category="technology"
                apiKey={apiKey}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
