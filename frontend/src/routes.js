import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import About from './components/about/AboutPage';
import BooksPage from './components/book/BooksPage';
import ManageBooksPage from "./components/book/ManageBooksPage";

export default (
    <Route path={"/"} component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="books" component={BooksPage}/>
      <Route path="books" component={ManageBooksPage}/>
      <Route path="courses/:Id" component={ManageBooksPage}/>
      <Route path="about" component={About}/>
    </Route>
);
