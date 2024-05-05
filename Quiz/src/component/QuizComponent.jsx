// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import "./QuizComponent.css";

class QuizComponent extends Component {
  render() {
    return (
      <div className="Quiz_page">
        <h1>Question</h1>
        <h2>Which is the only mammal that can jump?</h2>
        <p className="qn_no">1 of 15</p>
        <ul className="options">
          <li>Dog</li>
          <li>Elephant</li>
          <li>Goat</li>
          <li>Lion</li>
        </ul>
        <div className="buttons">
          <button>Previous</button>
          <button>Next</button>
          <button>Quit</button>
        </div>
      </div>
    );
  }
}

export default QuizComponent;