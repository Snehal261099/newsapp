import React from "react";
// import PropTypes from "prop-types";

const NewsItem =(props)=> {
  //   static propTypes = {};
    let { title, description, imgurl, newsurl, date, author, source } =props;

    return (
      <div className="my-3">
        <div className="card ">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="badge rounded-pill bg-danger">New</span>
            </h5>
            <p>{date}</p>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="blank"
              className="btn btn-dark btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
