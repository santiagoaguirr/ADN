// main.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/create-post" component={CreatePost} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
