import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { useAuth } from "./shared/hooks/auth-hook";
import { AuthContext } from "./shared/context/auth-contex";
import Landing from "./shared/components/App/Home";
import Footer from "./shared/components/UIElements/Footer";
import Navigation from "./shared/components/Navigation/Navigation";
import ShowProducts from "./shared/components/App/products/showProducts";
import "./App.css";
import "./fonts.css";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";

const BlogEntry = React.lazy(() => import("./shared/components/App/BlogEntry"));
const Blog = React.lazy(() => import("./shared/components/App/Blog"));
const AboutUs = React.lazy(() => import("./shared/components/App/AboutUs"));
const ContactUs = React.lazy(() => import("./shared/components/App/ContactUs"));
const Auth = React.lazy(() => import("./user/auth"));
const Dashboard = React.lazy(() => import("./user/Dashboard"));

function App() {
  const { token, login, logout, userId } = useAuth();
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogEntry} />
        <Route path="/productos" component={ShowProducts} />
        <Route path="/nosotros" component={AboutUs} />
        <Route path="/contacto" component={ContactUs} />
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/dashboard">
          <Auth></Auth>
        </Route>
        <Redirect to="/dashboard"></Redirect>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/infiniteStaff">
          <Auth></Auth>
        </Route>
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogEntry} />
        <Route path="/productos" component={ShowProducts} />
        <Route path="/nosotros" component={AboutUs} />
        <Route path="/contacto" component={ContactUs} />
        <Route exact path="/" component={Landing} />
        <Redirect to="/"></Redirect>
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <div className="App">
          <Navigation />
          <main className="main">
            <Suspense
              fallback={
                <div className='center'>
                  <LoadingSpinner />
                </div>
              }
            >
              {routes}
            </Suspense>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
