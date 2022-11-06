import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <section className="home-container">
      <h1>Hello Guest!</h1>
      <div className="foto">
        <img src="/Images/iydee.JPG" alt="my photo"></img>
      </div>
      <p>My name is Salami Moses</p>
      <p>I am a frontend engineer in training...</p>
      <div>
        <p>
          Click{" "}
          <a className="Nav" href="/about">
            About Page
          </a>{" "}
          ,{" "}
          <a className="Nav" href="/User">
            User Page
          </a>{" "}
          and{" "}
          <a className="Nav" href="/notfound">
            Here
          </a>{" "}
          for a surprise.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-container">
      <h1>Hello Again...</h1>
      <p>You are in the About Page</p>
      <p>Here's the lowdown about what the app is about:</p>
      <p>
        Implement an API fetch of your GitHub portfolio, show a page with a list
        of all your repositories on GitHub(the page should implement pagination
        for the repo list), and create another page showing data for a single
        repo clicked from the list of repos using nested routes while using all
        the necessary tools in react. Implement the proper SEO, Error Boundary
        (show a page to test the error boundary) and 404 pages. Good UI and
        Designs are important.
      </p>
      <div>
        <p>
          Click{" "}
          <a className="Nav" href="/">
            Home Page
          </a>{" "}
          to go to the HomePage.
        </p>
      </div>
      <div>
        <p>
          You can also click{" "}
          <a className="Nav" href="/User">
            User Page
          </a>{" "}
          to go to the User Page.
        </p>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <a className="Nav" href="/">
        Home
      </a>
      <a className="Nav" href="/about">
        About Page
      </a>
      <a className="Nav" href="/user">
        User Page
      </a>
    </section>
  );
}

function User() {
  return (
    <div>
      <p> Hello User, welcome to my page</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <section>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/notfound" element={<NotFound />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
