import React, { useState } from "react";
import "./App.css";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [view, setView] = useState("book");

  const renderComponent = () => {
    if (view === "book") {
      return <BookDetails />;
    } else if (view === "blog") {
      return <BlogDetails />;
    } else if (view === "course") {
      return <CourseDetails />;
    } else {
      return <p>Select a view</p>;
    }
  };

  return (
    <div className="App">
      <h1>Blogger App</h1>

      <div className="button-group">
        <button onClick={() => setView("book")}>Book Details</button>
        <button onClick={() => setView("blog")}>Blog Details</button>
        <button onClick={() => setView("course")}>Course Details</button>
      </div>

      <div className="component-section">
        {/* Conditional rendering using function */}
        {renderComponent()}

        {/* Example of ternary operator */}
        {view === "course" ? <p>You're viewing course details</p> : null}

        {/* Example using logical && */}
        {view === "blog" && <p>Blog section active</p>}
      </div>
    </div>
  );
}

export default App;
