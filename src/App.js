import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  return (
    <section className="home-container">
      <h1>Hello Guest!</h1>
      <p>This is my Home Page</p>
      Click{" "}
      <a className="Nav" href="/about">
        About Page
      </a>{" "}
      to go to the About Page. You can also click{" "}
      <a className="Nav" href="/User">
        User Page
      </a>{" "}
      to go to the User Page.
    </section>
  );
}

function About() {
  return (
    <section className="about-container">
      <h1>Hello Again...</h1>
      <p>This is the About Page</p>
      Click{" "}
      <a className="Nav" href="/">
        Home Page
      </a>{" "}
      to go to the HomePage. You can also click{" "}
      <a className="Nav" href="/User">
        User Page
      </a>{" "}
      to go to the User Page.
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
  // const UsingFetch = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://api.github.com/users/:Iydee")
      .then((response) => {
        console.log("response.json");
        // return response.json()
      })
      .then((response) => {
        console.log(response);
        // setUsers(response)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p> Hello User, welcome to my page</p>
      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      )}
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
