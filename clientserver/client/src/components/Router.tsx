import DetailPost from 'pages/DetailPost';
import EditPost from 'pages/EditPost';
import NewPost from 'pages/NewPost';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Header from './Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-post" exact component={NewPost} />
        <Route path="/edit-post/:id" exact component={EditPost} />
        <Route path="/post/:id" exact component={DetailPost} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
