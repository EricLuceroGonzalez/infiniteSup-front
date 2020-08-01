import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Landing from "./shared/components/App/Home";
import NavBar from "./shared/components/Navigation/NavBar";
import "./App.css";
import "./fonts.css";
import Footer from "./shared/components/UIElements/Footer";
// import ShowBlog from "./shared/components/App/ShowBlog";
// import ShowCategories from "./shared/components/App/ShowCategories";
import BlogEntry from "./shared/components/App/BlogEntry";
import AboutUs from "./shared/components/App/AboutUs";
import ContactUs from "./shared/components/App/ContactUs";
import Navigation from "./shared/components/Navigation/Navigation";
import Blog from "./shared/components/App/Blog";
import ShowProducts from "./shared/components/App/showProducts";
// import NavLinks from "./shared/components/Navigation/NavLinks";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <main className="main">
          <Route exact path="/" component={Landing} />
          <Route exact path="/blog" component={Blog} />
          <Route
            path="/blog/:id"
            render={(props) => <BlogEntry {...props} />}
          />
          <Route path='/productos' component={ShowProducts}/>
          <Route path="/nosotros" component={AboutUs} />
          <Route path="/contacto" component={ContactUs} />
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
