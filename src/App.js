import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    setShowMessage(true);
  };
  return (
    <div className="container">
      <h1>Getting the Value of an Input Field in React</h1>
      <div className="input-container">
        <label htmlFor="message">Enter Message: </label>
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message}
          placeholder="Type message here..."
        />
      </div>
      <button
        style={{ backgroundColor: "lightblue", borderRadius: "20px" }}
        onClick={handleSubmit}
      >
        Submit
      </button>
      {showMessage && (
        <div className="message-container">
          <h2 style={{ color: "green" }}>Message: {message}</h2>
          <p className="explanation">
            In this episode, we learn how to effectively retrieve and display
            the value of an input field in React. By utilizing the useState hook
            for state management and event handling, we can ensure real-time
            updates based on user input.
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
