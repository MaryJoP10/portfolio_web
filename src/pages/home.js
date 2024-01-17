import React from "react"
import '../styles/home.css'

const Home = () => {

  return (
    <>
      <div className="grid-container">
        {[...Array(5).keys()].map((_, index) => (
          <div
            key={`horizontal-${index}`}
            className="line-horizontal"
            style={{ top: `${(index + 1) * 10}vh` }}
          ></div>
        ))}
          {[...Array(5).keys()].map((_, index) => (
            <div
              key={`vertical-left-${index}`}
              className="line-vertical line-left"
              style={{ left: `${(index + 1) * 10}vw` }}
            ></div>
          ))}
          {[...Array(5).keys()].map((_, index) => (
            <div
              key={`vertical-right-${index}`}
              className="line-vertical line-right"
              style={{ right: `${(index + 1) * 10}vw` }}
            ></div>
          ))}
      </div>
    </>
  );
};

export default Home;