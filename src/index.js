import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ShoppingList from "./ShoppingList";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div>
          <Board />
        </div>
      </div>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }
  render() {
    const status = "X";
    return (
      <div className="board">
        <div>Next Player: {status}</div>
        <div className="first-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="second-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="third-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    return <button className="square">{/*todo*/}</button>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
