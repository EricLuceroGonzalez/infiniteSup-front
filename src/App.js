import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./shared/components/App/Home";
import NavBar from "./shared/components/Navigation/NavBar";
import "./App.css";
import Footer from "./shared/components/App/Footer";
import ShowBlog from "./shared/components/App/ShowBlog";
import ShowCategories from "./shared/components/App/ShowCategories";
import BlogEntry from "./shared/components/App/BlogEntry";
// import NavLinks from "./shared/components/Navigation/NavLinks";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <Route path='/blog/:id' component={BlogEntry}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;